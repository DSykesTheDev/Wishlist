import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './wish/home/home.component';

const routes: Routes = [
  {component: HomeComponent, path: '', pathMatch: 'full'},
  {component: HomeComponent, path:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
