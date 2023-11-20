import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import  { EventsService } from '../../events.service'
import { WishService } from '../wish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items: WishItem[] = [];

  filter: any;

  constructor(public events: EventsService, public wishService: WishService) {
    events.listen('removeWish', (item) => {
      this.items.splice(this.items.indexOf(item),1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe({
      next: (data: any) => {
        this.items = data;
        console.log(this.items)
      }})
  }
}
