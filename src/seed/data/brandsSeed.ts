import { Brand } from "../../brands/entities/brand.entity.js";
import { v4 as uuidv4 } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    { id: uuidv4(), name: 'Toyota', createAt: new Date().toISOString(), updatedAt: null },
    { id: uuidv4(), name: 'Ford', createAt: new Date().toISOString(), updatedAt: null },
    { id: uuidv4(), name: 'Chevrolet', createAt: new Date().toISOString(), updatedAt: null },
    { id: uuidv4(), name: 'Mercedes-Benz', createAt: new Date().toISOString(), updatedAt: null },
    { id: uuidv4(), name: 'BMW', createAt: new Date().toISOString(), updatedAt: null },
    { id: uuidv4(), name: 'Audi', createAt: new Date().toISOString(), updatedAt: null },
];