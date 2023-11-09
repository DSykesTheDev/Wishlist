import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

const wishFilters = [
  (item:WishItem) => item,
  (item:WishItem) => item.isComplete(),
  (item:WishItem) => !item.isComplete()
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  wishText: string = ''; 
  wishFilter: any = '0';

  items: WishItem[] = [
    new WishItem("Start this project"),
    new WishItem("Get First Paycheck", true),
    new WishItem('Start Saving')
  ];

  get visibleItems(): WishItem[] {
    return this.items.filter(wishFilters[this.wishFilter]);
  };

  constructor() {

  }

  toggleItem(item: WishItem) {
    item.Complete();
  }

  addWish()
  {
    if(this.wishText.length === 0)
      return;

    this.items.push(new WishItem(this.wishText, false));
    this.wishText=''
  }
}
