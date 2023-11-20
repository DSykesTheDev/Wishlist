import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(public http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",

      })
    }
  }

  getWishes() {
    let options = this.getStandardOptions()

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('assets/Wishes.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0)
      console.error(`There was an error on te network or client. (Error: ${error.error})`)
    else 
      console.error(`Server-side Error: (Error: ${error.error}`)

    return throwError(() => new Error('Cannot retrieve wises from the server. Please try again.'))
  }


  addWish() {
    
  }
}
