import { Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_CARS_DATA } from '../utils/mock_data.js';

@Injectable()
export class CarsService {
    private readonly cars: string[] = MOCK_CARS_DATA;

    getAllCars(): string[] {
        return this.cars;
    }

    findById(id: number): string {
        const car = this.cars[id];

        if(!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        
        return car;
    }
}
