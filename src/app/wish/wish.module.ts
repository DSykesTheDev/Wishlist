import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItemComponent } from './wish-item/wish-item.component';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    WishListComponent,
    HomeComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    WishListComponent,
    HomeComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishItemComponent
  ]
})
export class WishModule { }
