import { 
    BadRequestException, 
    Controller, 
    Get, 
    InternalServerErrorException, 
    Param 
} from '@nestjs/common';
// Services
import { CarsService } from './cars.service.js';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get('/all-cars')
    getAllCars(): string[] {
        const carsResponse = this.carsService.getAllCars();
        console.log(carsResponse);
        return carsResponse;
    }

    @Get(':id')
    findById(@Param('id') id: number | string): string {
        const carId = typeof id === 'string' ? parseInt(id) : id;

        try {
            const carResponse = this.carsService.findById(carId as number);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error finding car with id ${carId}`);
        }
    }
}
