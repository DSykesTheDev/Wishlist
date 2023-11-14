import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>();
  wishText: string = ''

  constructor() {

  }

  ngOnInit(): void {
      
  }

  addNewWish()
  {
    if(this.wishText.length === 0)
      return;
    
    this.addWish.emit(new WishItem(this.wishText, false));
    this.wishText=''
  }

}
