import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
// DTOs
import { CreateBrandDto } from './create-brand.dto.js';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {

    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    updatedAt: string | null;

}
