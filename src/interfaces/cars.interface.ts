export type Brand = 'Toyota' | 'Ford' | 'Chevrolet' | 'Honda' | 'Nissan' | 'Hyundai' | 'Kia' | 'Volkswagen' | 'Mercedes-Benz' | 'BMW' | 'Audi';

export interface Car {
    id: string;
    name: string;
    brand: Brand;
}