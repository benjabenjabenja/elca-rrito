import {
    Body,
    Controller, 
    Delete, 
    Get, 
    InternalServerErrorException, 
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
// DTOs
import { CreateCarDTO, UpdateCarDTO } from './dto/index.js';
// Interfaces
import { Car } from '../interfaces/cars.interface.js';
// Services
import { CarsService } from './cars.service.js';
// utils
import { UUID_VERSION } from '../utils/const.js';

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
    async findOneById(
        @Param('id', new ParseUUIDPipe({ version: UUID_VERSION })) id: string
    ): Promise<Car> {
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
    @UsePipes(new ValidationPipe({ expectedType: CreateCarDTO }))
    async createOneCar(
        @Body() createCarDto: CreateCarDTO
    ): Promise<Car> {
        try {
            const carResponse = await this.carsService.createOneCar(createCarDto);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error creating car');
        }
    }

    @Patch('/update/:id')
    async updateCar(
        @Param('id', new ParseUUIDPipe({ version: UUID_VERSION })) id: string, 
        @Body() updateCarDto: UpdateCarDTO
    ): Promise<Car> {
        try {
            const carResponse = await this.carsService.updateCar(id, updateCarDto);
            console.log(carResponse);
            return carResponse;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error updating car');
        }
    }

    @Delete('/delete/:id')
    async deleteOneCar(
        @Param('id', new ParseUUIDPipe({ version: UUID_VERSION })) id: string
    ): Promise<void> {
        try {
            await this.carsService.deleteOneCar(id);
            console.log(`Car with id ${id} deleted successfully`);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error deleting car');
        }
    }
}
