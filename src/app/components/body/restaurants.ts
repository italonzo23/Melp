import { DecimalPipe } from '@angular/common';

export interface Restaurant {
    id: string;
    rating: number;
    name: string;
    contact: {
        site: string;
        email: string;
        phone: number;
    };
    address: {
        street: String;
        city: String;
        state: String;
        location: {
            lat: DecimalPipe;
            lng: DecimalPipe;
        }
    };
}

