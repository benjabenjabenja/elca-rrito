import { Controller, Get } from '@nestjs/common';
// Services
import { CarsService } from './cars.service.js';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get('/all-cars')
    getAllCars() {
        const carsResponse = this.carsService.getAllCars();
        console.log(carsResponse);
        return carsResponse;
    }
}
