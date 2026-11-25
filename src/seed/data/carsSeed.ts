import { Car } from "../../interfaces/cars.interface.js";
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
    { id: uuidv4(), name: 'Yaris GR', brand: 'Toyota' },
    { id: uuidv4(), name: 'Focus RS', brand: 'Ford' },
    { id: uuidv4(), name: 'Golf GTI', brand: 'Volkswagen' },
    { id: uuidv4(), name: 'C-Class AMG', brand: 'Mercedes-Benz' },
    { id: uuidv4(), name: '3 Series M', brand: 'BMW' },
    { id: uuidv4(), name: 'TT RS', brand: 'Audi' },
];