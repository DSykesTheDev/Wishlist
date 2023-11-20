import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from 'src/shared/models/WishItem';
import { EventsService } from '../../events.service';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.scss'
})
export class WishItemComponent {

  @Input() wish!: WishItem;
  @Input() completed!: boolean;
  @Output() completedChange = new EventEmitter<boolean>();

  constructor(private events: EventsService)
  {

  } 

  cssClasses()
  {
    return {'text-primary text-muted bg-light': this.wish.Complete}
  }

  toggleCompleted() {
    this.wish.Complete = !this.wish.Complete;
  }

  removeItem(){
    this.events.emit('removeWish', this.wish);
  }


}

