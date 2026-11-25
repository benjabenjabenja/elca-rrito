import { 
	Injectable, 
	InternalServerErrorException 
} from '@nestjs/common';
// Services
import { CarsService } from '../cars/cars.service.js';
import { BrandsService } from '../brands/brands.service.js';
// Data
import { CARS_SEED } from './data/carsSeed.js';
import { BRANDS_SEED } from './data/brandsSeed.js';

@Injectable()
export class SeedService {

	constructor(
		private readonly carsService: CarsService,
		private readonly brandsService: BrandsService
	){}
  
    async createSeed(): Promise<{ message: string, statusCode: number }>{

		try {

			await this.carsService.seedCars(CARS_SEED);
			await this.brandsService.seedBrands(BRANDS_SEED);

			return {
				message: 'Seed created successfully',
				statusCode: 200,
			}

		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}

	}
}
