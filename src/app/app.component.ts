import { Component, enableProdMode } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wishlist';

  constructor()
  {
      enableProdMode()
      
  }
}
