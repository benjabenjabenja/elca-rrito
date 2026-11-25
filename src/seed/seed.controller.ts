import { 
	Controller, 
	Get, 
	InternalServerErrorException 
} from '@nestjs/common';
// Services
import { SeedService } from './seed.service.js';

@Controller('seed')
export class SeedController {
  	constructor(
		private readonly seedService: SeedService
	) {}

	@Get()
	async createSeed() {
		
		try {
			return await this.seedService.createSeed();
		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}

	
}
