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
}
