import { IsIn, IsString } from "class-validator";
// Interfaces
import { type Brand } from "../../interfaces/cars.interface.js";
// Utils
import { MOCK_CARS_DATA } from "../../utils/mockData.js";


export class CreateCarDTO {

    @IsString()
    @IsIn(MOCK_CARS_DATA)
    readonly brand: Brand;

    @IsString()
    readonly name: string;
}