import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller.js';
// Services
import { SeedService } from './seed.service.js';
// Modules
import { BrandsModule } from '../brands/brands.module.js';
import { CarsModule } from '../cars/cars.module.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandsModule]
})
export class SeedModule {}
