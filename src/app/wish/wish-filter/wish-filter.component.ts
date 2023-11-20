import { Component, Output, Input, OnInit, EventEmitter, AfterContentChecked, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from 'src/shared/models/WishItem';

const wishFilters = [
  (item:WishItem) => item,
  (item:WishItem) => item.Complete,
  (item:WishItem) => !item.Complete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})
export class WishFilterComponent implements OnInit {

  @Input() listFilter: any;
  @Output() listFilterChange = new EventEmitter<any>();
  _filter: any = 0;
  
  constructor() {

  }

  ngOnInit(): void {
    this.updateFilter(this._filter);
  }


  updateFilter(value: any) {
    this.listFilter = wishFilters[value]
    this.listFilterChange.emit(this.listFilter);
    
  }

}
