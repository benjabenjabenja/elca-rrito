import { 
	BadRequestException, 
	Injectable, 
	InternalServerErrorException, 
	NotFoundException 
} from '@nestjs/common';
// DTOs
import { CreateBrandDto, UpdateBrandDto } from './dto/index.js';
// Entities
import { Brand } from './entities/brand.entity.js';
// Utils
import { MOCK_BRANDS_DATA_WITH_ID } from '../utils/mockData.js';
// UUUID
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {

	private _brands: Brand[] = []; // MOCK_BRANDS_DATA_WITH_ID;

	async create({ name }: CreateBrandDto): Promise<Brand> {
		const newBrand: Brand = {
			id: uuidv4(),
			name,
			createAt: new Date().toISOString(),
			updatedAt: null
		}

		if(this._brands.find(brand => brand.name === name)) {
			throw new BadRequestException(`Brand with name ${name} already exists`);
		}

		this._brands.push(newBrand);

		return newBrand;
	}

	async findAll(): Promise<Brand[]> {
		return this._brands;
	}

	async findOne(id: string): Promise<Brand> {
		const brand = this._brands.find(b => b.id === id);

		if(!brand){
			throw new NotFoundException(`Brand with id: ${id} not found`);
		}

		return brand;
	}

	async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
		const brand = await this.findOne(id);

		if(updateBrandDto.id && updateBrandDto.id !== brand.id) {
			throw new BadRequestException(`Brand ID: ${id} is not valid`);
		}

		const updatedBrand: Brand = { ...brand, ...updateBrandDto, id, updatedAt: new Date().toISOString() };
		this._brands = this._brands.map(b => b.id === id ? updatedBrand : b);
		
		return updatedBrand;
	}

	async delete(id: string): Promise<void> {
		const brand = await this.findOne(id);

		if(!brand){
			throw new NotFoundException(`Brand with id: ${id} not found`);
		}

		this._brands = this._brands.filter(b => b.id !== id);
	}

	async seedBrands( seedData: Brand[] = MOCK_BRANDS_DATA_WITH_ID): Promise<void> {
		
		try {
			this._brands = seedData;
		} catch(error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}
}
