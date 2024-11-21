import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Iced Coffee', price: 5.0, description: '', image: '../coffeeIce.png'},
    { id: 2, name: 'Coffee Mocha', price: 7.5, description: '', image: '../coffeeMocca.png' },
    { id: 3, name: 'Lattes Coffee', price: 6.0, description: '', image: '../copoCafe.png' }

  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
