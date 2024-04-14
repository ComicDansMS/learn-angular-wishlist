import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { WishItem } from "../models/wishItem";
import { catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(private http: HttpClient) { }

  getWishes() {
    return this.http.get<WishItem[]>('assets/wishes1.json').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network: ', error.error)
    } else {
      console.error('Server-side error: ', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  }
}