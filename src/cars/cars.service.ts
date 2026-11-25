import { Injectable, NotFoundException } from '@nestjs/common';
// Interfaces
import { Car } from '../interfaces/cars.interface.js';
// Utils
import { MOCK_CARS_DATA_WITH_ID } from '../utils/mock_data.js';

@Injectable()
export class CarsService {
    private readonly cars: Car[] = MOCK_CARS_DATA_WITH_ID;

    getAllCars(): string[] {/// mapeo de Car[] a string[] para devolver el nombre de los autos
        const carsResponse = this.cars.map(car => car.name);
        console.log(carsResponse);
        return carsResponse;
    }

    findById(id: number): string {
        const car = this.cars.find(car => car.id === id);

        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car.name;
    }
}
