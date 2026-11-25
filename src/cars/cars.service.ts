import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
// Interfaces
import { Car } from '../interfaces/cars.interface.js';
// DTOs
import { CreateCarDTO, UpdateCarDTO } from './dto/index.js';
// Utils
import { MOCK_CARS_DATA_WITH_ID } from '../utils/mock_data.js';
// UUID
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
    private cars: Car[] = MOCK_CARS_DATA_WITH_ID;

    async findAllCars(): Promise<Car[]> {/// mapeo de Car[] a string[] para devolver el nombre de los autos
        /* 
            const carsResponse = this.cars.map(car => car.name);
            console.log(carsResponse);
            return carsResponse; 
        */
        
        return this.cars;
    }

    async findOneById(id: string): Promise<Car> {
        const car = this.cars.find(car => car.id === id);

        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

    async createOneCar(carDto: CreateCarDTO): Promise<Car> {
        const newCar: Car = {
            ...carDto,
            id: uuidv4()
        }

        if(this.cars.find(car => car.name === newCar.name)) {
            throw new BadRequestException(`Car with name ${newCar.name} already exists`);
        }

        this.cars.push(newCar);

        return newCar;
    }

    async updateCar(id: string, carDto: UpdateCarDTO): Promise<Car> {

        try {
            const car = await this.findOneById(id);

            if(carDto.id && carDto.id !== car.id) {
                throw new BadRequestException(`Car ID: ${id} is not valid`);
            }

            const updatedCar: Car = { ...car, ...carDto, id };
            return updatedCar;

        } catch(error) {
            console.error(error);
            throw new InternalServerErrorException('Error updating car');
        }
        
    }

    async deleteOneCar(id: string): Promise<void> {
        
        try {
            const car = await this.findOneById(id);
            this.cars = this.cars.filter(c => c.id !== car.id); 
        } catch(error) {
            console.error(error);
            throw new InternalServerErrorException('Error deleting car');
        }

    }
}
