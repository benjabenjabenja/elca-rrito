import { Brand, Car } from "../../interfaces/cars.interface.js";


export class CreateCarDTO implements Car {

    readonly id: string;

    readonly brand: Brand;
    
    readonly name: string;
}