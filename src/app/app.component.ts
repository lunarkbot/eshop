import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from './button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eshop';
  inCart = 0;

  addToCart() {
    this.inCart += 1;
  }

  removeFromCart() {
    this.inCart -= 1;
  }
}
