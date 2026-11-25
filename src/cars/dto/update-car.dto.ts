import { IsIn, IsOptional, IsString, IsUUID } from "class-validator";
// Interfaces
import { type Brand } from "../../interfaces/cars.interface.js";
// Utils
import { MOCK_CARS_DATA } from "../../utils/mock_data.js";
import { UUID_VERSION } from "../../utils/const.js";

export class UpdateCarDTO {

    @IsUUID(UUID_VERSION)
    @IsOptional()
    readonly id: string;

    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    @IsIn(MOCK_CARS_DATA)
    readonly brand?: Brand;
}