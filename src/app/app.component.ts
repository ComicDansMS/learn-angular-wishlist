import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wishes: WishItem[] = [
    new WishItem('Coffee', true),
    new WishItem('Pizza'),
    new WishItem('Wine'),
  ]

  addWish(wish: WishItem): void {
    this.wishes.push(wish);
  }
}
