import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.scss'
})
export class WishItemComponent {

  @Input() wishText!: string;
  @Input() completed!: boolean;
  @Output() completedChange = new EventEmitter<boolean>();

  constructor()
  {

  } 

  toggleCompleted() {
    this.completed = !this.completed;
    this.completedChange.emit(this.completed)
  }



}

