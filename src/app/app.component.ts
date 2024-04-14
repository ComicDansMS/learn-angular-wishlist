import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(events: EventService) {
    events.listen('remove-wish', (wish: WishItem) => this.removeWish(wish));
    events.listen('toggle-fulfilled', (wish: WishItem) => this.toggleFulfilled(wish));
  }

  wishes: WishItem[] = [
    new WishItem('Coffee', true),
    new WishItem('Pizza'),
    new WishItem('Wine'),
  ];

  filter: (item: WishItem) => boolean = () => true;

  addWish(wish: WishItem): void {
    this.wishes.push(wish);
  }

  removeWish(wish: WishItem): void {
    const index: number = this.wishes.indexOf(wish);
    this.wishes.splice(index, 1);
  }

  toggleFulfilled(wish: WishItem): void {
    wish.isFulfilled = !wish.isFulfilled;
  }
}
