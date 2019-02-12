
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../components/body/restaurants';

@Injectable()
export class RestaurantServices {
    private url = './assets/data_melp.json';

    constructor(public http: HttpClient) {
    }

    getRestaurants(): Observable<Restaurant[]> {

        return this.http.get<Restaurant[]>(this.url);
    }
}
