import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/eventService';
import { WishService } from 'src/shared/services/WishService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wishes: WishItem[] = [];
  filter: (item: WishItem) => boolean = () => true;
  
  constructor(events: EventService, private wishService: WishService) {
    events.listen('remove-wish', (wish: WishItem) => this.removeWish(wish));
    events.listen('toggle-fulfilled', (wish: WishItem) => this.toggleFulfilled(wish));
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: WishItem[]) => {
        this.wishes = data;
      },
      (error: any) => {
        alert(error.message);
      }
    )
  }

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
