// interfaces
import { Car } from "../interfaces/cars.interface.js"
// uuid
import { v4 as uuidv4 } from 'uuid';

export const MOCK_CARS_DATA: string[] = [
    'Toyota',
    'Ford',
    'Chevrolet',
    'Honda',
    'Nissan',
    'Hyundai',
    'Kia',
    'Volkswagen',
    'Mercedes-Benz',
    'BMW',
    'Audi',
]

export const MOCK_CARS_DATA_WITH_ID: Car[] = [
    { id: uuidv4(), name: 'Yaris GR', brand: 'Toyota' },
    { id: uuidv4(), name: 'Focus RS', brand: 'Ford' },
    { id: uuidv4(), name: 'Cruze ST', brand: 'Chevrolet' },
    { id: uuidv4(), name: 'Civic Type R', brand: 'Honda' },
    { id: uuidv4(), name: 'Sentra SR', brand: 'Nissan' },
    { id: uuidv4(), name: 'Elantra N', brand: 'Hyundai' },
    { id: uuidv4(), name: 'Sportage N', brand: 'Kia' },
    { id: uuidv4(), name: 'Golf GTI', brand: 'Volkswagen' },
    { id: uuidv4(), name: 'C-Class AMG', brand: 'Mercedes-Benz' },
    { id: uuidv4(), name: '3 Series M', brand: 'BMW' },
    { id: uuidv4(), name: 'TT RS', brand: 'Audi' },
]