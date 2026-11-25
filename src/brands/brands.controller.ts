import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, InternalServerErrorException } from '@nestjs/common';
import { BrandsService } from './brands.service.js';
import { CreateBrandDto } from './dto/create-brand.dto.js';
import { UpdateBrandDto } from './dto/update-brand.dto.js';
import { UUID_VERSION } from '../utils/const.js';
import { Brand } from './entities/brand.entity.js';

@Controller('brands')
export class BrandsController {
	constructor(
		private readonly brandsService: BrandsService
	) {}

	@Post('/create')
	async create(
		@Body() createBrandDto: CreateBrandDto
	): Promise<Brand> {

		try {

			const response = await this.brandsService.create(createBrandDto);
			return response;

		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}

	@Get('/all-brands')
	async findAll(): Promise<Brand[]> {

		try{
			const response = await this.brandsService.findAll();
			return response;
		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}

	@Get(':id')
	async findOne(
		@Param('id', new ParseUUIDPipe({ version: UUID_VERSION })) id: string
	): Promise<Brand> {

		try{
			const response = await this.brandsService.findOne(id);
			return response;
		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}

	@Patch('/update/:id')
	async update(
		@Param('id', new ParseUUIDPipe({ version: UUID_VERSION })) id: string, 
		@Body() updateBrandDto: UpdateBrandDto
	): Promise<Brand> {

		try{
			const response = await this.brandsService.update(id, updateBrandDto);
			return response;
		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}

	@Delete('/delete/:id')
	async delete(
		@Param('id', new ParseUUIDPipe({ version: UUID_VERSION })) id: string
	): Promise<void> {

		try{
			const response = await this.brandsService.delete(id);
			return response;
		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('Internal Server Error');
		}
	}
}
