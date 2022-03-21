import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   main: Product[] = [
     new Product(
       1,
       'ad',
       'detay',
       150,
       1,
       ['assets/deneme1.jpg','','']
       ),
    new Product(
      2,
      'ad',
      'detay',
      150,
      1,
      ['','','']
      ),
    new Product(
      3,
      'ad',
      'detay',
      150,
      1,
      ['','','']
      ),
    new Product(
      4,
      'ad',
      'detay',
      150,
      1,
      ['','','']
      ),
    new Product(
      5,
      'ad',
      'detay',
      150,
      1,
      ['','','']
      ),
    new Product(
      6,
      'ad',
      'detay',
      150,
      1,
      ['','','']
      ),
   ]

  constructor() { }

  getProducts(){
    return this.main;
  }


  getMain(id: number){
    return this.main.find(product => product.id === id);
  }
}
