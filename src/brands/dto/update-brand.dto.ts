import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsOptional, isString, IsString, IsUUID } from 'class-validator';
// DTOs
import { CreateBrandDto } from './create-brand.dto.js';
// Utils
import { MOCK_CARS_DATA } from '../../utils/mockData.js';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {

    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(MOCK_CARS_DATA)
    name?: string;

    @IsOptional()
    @IsString()
    updatedAt: string | null;

}
