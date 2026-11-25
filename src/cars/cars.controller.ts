import {
    Body,
    Controller, 
    Delete, 
    Get, 
    InternalServerErrorException, 
    Param, 
    ParseIntPipe,
    Patch,
    Post
} from '@nestjs/common';
// Interfaces
import { Car } from '../interfaces/cars.interface.js';
// Services
import { CarsService } from './cars.service.js';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get('/all-cars')
    async findAllCars(): Promise<Car[]> {
        try {
            const carsResponse = await this.carsService.findAllCars();
            console.log(carsResponse);
            return carsResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error finding all cars');
        }
    }

    @Get(':id')
    async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Car> {
        /* // forma tradicional sin pipe
            const carId = typeof id === 'string' ? +id : id;

            if(isNaN(carId)) {
                throw new BadRequestException(`Invalid car id: ${id}`);
            } 
        */
        const carId = id;

        try {
            const carResponse = await this.carsService.findOneById(carId);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error finding car with id ${carId}`);
        }
    }

    @Post('/create')
    async createOneCar(@Body() createCarDto: Pick<Car, 'name' | 'brand'>): Promise<Car> {
        try {
            const carResponse = await this.carsService.createOneCar(createCarDto);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error creating car');
        }
    }

    @Patch(':id')
    async updateCar(@Param('id', ParseIntPipe) id: number, @Body() updateCarDto: Pick<Car, 'name' | 'brand'>): Promise<Car> {
        try {
            const carResponse = await this.carsService.updateCar(id, updateCarDto);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error updating car');
        }
    }

    @Delete(':id')
    async deleteOneCar(@Param('id', ParseIntPipe) id: number): Promise<Car[]> {
        try {
            const carResponse = await this.carsService.deleteOneCar(id);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error deleting car');
        }
    }
}
