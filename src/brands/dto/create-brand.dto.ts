import { IsIn, IsNotEmpty, IsString } from "class-validator";
// Utils
import { MOCK_CARS_DATA } from "../../utils/mockData.js";

export class CreateBrandDto {

    @IsString()
    @IsNotEmpty()
    @IsIn(MOCK_CARS_DATA)
    name: string;

}
