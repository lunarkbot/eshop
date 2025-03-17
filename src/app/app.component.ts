import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { Product } from './types/card';
import { product } from './data/product.data';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eshop';
  product: Product = product;

  inCart = 0;

  addToCart() {
    this.inCart += 1;
  }

  removeFromCart() {
    this.inCart -= 1;
  }
}
