import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
// Interfaces
import { Car } from '../interfaces/cars.interface.js';
// Utils
import { MOCK_CARS_DATA_WITH_ID } from '../utils/mock_data.js';
// uuid
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
    private readonly cars: Car[] = MOCK_CARS_DATA_WITH_ID;

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

    async createOneCar(carDto: Pick<Car, 'name' | 'brand'>): Promise<Car> {
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

    async updateCar(id: string, carDto: Pick<Car, 'name' | 'brand'>): Promise<Car> {
        const car = this.cars.find(car => car.id === id);

        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        const updatedCar: Car = { ...car, ...carDto };
        return updatedCar;
    }

    async deleteOneCar(id: string): Promise<Car[]> {
        const car = this.cars.find(car => car.id === id);

        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        const responseDeletingCar: Car[] = this.cars.filter(car => car.id !== id);

        return responseDeletingCar;
    }
}
