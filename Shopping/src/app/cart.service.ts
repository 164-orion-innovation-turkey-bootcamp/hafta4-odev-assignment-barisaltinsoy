import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  holder = [];
  numberOfProductInCart = new BehaviorSubject([]);

  constructor() {
    const ls = JSON.parse(this.getCartData());
    if(ls){
      this.numberOfProductInCart.next(ls);
    }
   }

  addCartProduct(product: Product) {
    const ls = this.getCartData(); // JSON.parse(localStorage.getItem('cart'));

    let exist: Product;

    if(ls){
      exist = ls.find((cartProduct) => {
        return cartProduct.id === product.id;
      })};

    if(exist) {
      exist.quantity++;
      this.setCartData(ls);
      // localStorage.setItem('cart', JSON.stringify(ls));
    }else{
      if(ls){
        const newData = [...ls, product.id];
        this.setCartData(newData);
        // localStorage.setItem('cart', JSON.stringify(newData));
        this.numberOfProductInCart.next(this.getCartData());
      }else{
        this.holder.push(product);
        this.setCartData(holder);
        // localStorage.setItem('cart', JSON.stringify(this.holder));
        this.numberOfProductInCart.next(this..getCartData());
      }

    }
    setCartData(data: any){
      localStorage.setItem('cart', JSON.stringify(data));
  }
    getCartData(){
      return JSON.parse(localStorage.getItem('cart'));
    }

  }
}
