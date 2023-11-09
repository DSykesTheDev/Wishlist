import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  wishText: string = '';
  wishFilter: string = '0';

  items: WishItem[] = [
    new WishItem("Start this project", ),
    new WishItem("Get First Paycheck", true),
    new WishItem('Start Saving')
  ];

  visibleItems: WishItem[] = this.items;

  constructor() {

  }

  toggleItem(item: WishItem) {
    item.Complete();
  }

  filterChanged(e:any)
  {
    if(e === '0')
      this.visibleItems = this.items
    else if(e === '1')
      this.visibleItems = this.items.filter(item => {return item.isComplete() == true})
    else  
      this.visibleItems = this.items.filter(item => !item.isComplete())
  }

  addWish()
  {
    if(this.wishText.length === 0)
      return;

    this.items.push(new WishItem(this.wishText, false));
    this.wishText=''
  }
}
