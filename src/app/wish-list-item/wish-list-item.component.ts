import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  constructor(
    private events: EventService
  ) {}

  @Input() wish!: WishItem;

  removeWish(): void {
    this.events.emit('remove-wish', this.wish);
  }

  toggleFulfilled(): void {
    this.events.emit('toggle-fulfilled', this.wish);
  }

  get cssClasses(): { [key: string]: boolean } {
    return {
      'strikeout muted': this.wish.isFulfilled
    };
  }
}
