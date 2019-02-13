import { Component, OnInit, Input } from '@angular/core';
import { RestaurantServices } from 'src/app/services/restaurants.service';
import { Restaurant } from './restaurants';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // Lista de restaurantes
  restaurants: Restaurant[];
  constructor(private restaurantsservices: RestaurantServices) {
  }
  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant(): void {
    this.restaurantsservices.getRestaurants().
      subscribe(restaurants => this.restaurants = restaurants);
  }
  searchRestaurant(term: string) {
    const restaurantArr: Restaurant[] = [];
    console.log('Entro');
    term = term.toLowerCase();
    for (const rest of this.restaurants) {
      const name =  rest.name.toLowerCase();
      if ( name.indexOf(term) >= 0 ) {
        console.log(name);
        restaurantArr.push(rest);
      }

    }
    return restaurantArr;
  }

  openRestaurant(ress: Restaurant) {
    console.log('Entro a restaurant');
    console.log(ress);
  }
}
