import { Module } from '@nestjs/common';
// Controlles
import { CarsController } from './cars.controller.js';
// Services
import { CarsService } from './cars.service.js';

@Module({
    controllers: [CarsController],
    providers: [CarsService]
})
export class CarsModule {}
