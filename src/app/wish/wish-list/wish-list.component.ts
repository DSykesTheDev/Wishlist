import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  @Input() wishes: WishItem[] = []
  constructor()
  {

  }

  ngOnInit() {
    
  }
}
