import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<(item: WishItem) => boolean>();

  ngOnInit(): void {
    this.updateFilter(0);
  }

  selectedFilter: number = 0;

  filters = [
    {
      id: 0,
      name: 'All',
      filter: (item: WishItem) => true,
    },
    {
      id: 1,
      name: 'Unfulfilled',
      filter: (item: WishItem) => !item.isFulfilled,
    },
    {
      id: 2,
      name: 'Fulfilled',
      filter: (item: WishItem) => item.isFulfilled,
    }
  ]

  updateFilter(value: number | string): void {
    const index = typeof value === "string" ? parseInt(value) : value;
    this.filter = this.filters[index];
    this.filterChange.emit(this.filter.filter);
  }
}
