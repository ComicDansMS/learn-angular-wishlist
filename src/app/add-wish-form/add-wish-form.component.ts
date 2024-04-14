import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  inputText: string = '';

  addNewWish(): void {
    if (this.inputText.length) {
      const newWish: WishItem = new WishItem(this.inputText);
      this.addWish.emit(newWish);
      this.inputText = '';
    }
  }
}
