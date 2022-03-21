import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  // since no selected image, array[0] will be shown
  activeImage = 0;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private CartService: CartService) { }

  ngOnInit(): void {
    // + is to prevent string
    const id = +this.router.snapshot.params['id'];
    this.product = this.productService.getMain(id);
  }

  addToCart(product: Product){
    this.CartService.addCartProduct(product);
  }

}
