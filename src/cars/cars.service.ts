import { Injectable } from '@nestjs/common';
import { MOCK_CARS_DATA } from '../utils/mock_data.js';

@Injectable()
export class CarsService {
    private readonly cars: string[] = MOCK_CARS_DATA;

    getAllCars(): string[] {
        return this.cars;
    }
}
