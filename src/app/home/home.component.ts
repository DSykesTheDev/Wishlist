import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  items: WishItem[] = [
    new WishItem("Start this project"),
    new WishItem("Get First Paycheck", true),
    new WishItem('Start Saving')
  ];

  filter: any;

  constructor() {
    
  }

}
