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
    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get('/all-cars')
    findAllCars(): string[] {
        const carsResponse = this.carsService.findAllCars();
        console.log(carsResponse);
        return carsResponse;
    }

    @Get(':id')
    findOneById(@Param('id') id: number | string): string {
        const carId = typeof id === 'string' ? parseInt(id) : id;

        if(isNaN(carId)) {
            throw new BadRequestException(`Invalid car id: ${id}`);
        }

        try {
            const carResponse = this.carsService.findOneById(carId as number);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error finding car with id ${carId}`);
        }
    }
}
