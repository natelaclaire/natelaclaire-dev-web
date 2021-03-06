import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface Photo {
  text: String;
  url: String;
  link: String;
  posted: Date;
}

export interface Food {
  kcal: Number;
  carbs: Number;
  protein: Number;
  fat: Number;
  date: Date;
}

export interface Commit {
  message: String;
  repo: String;
  link: String;
  timestamp: Date;
}

export interface MyData {
  loading: boolean;
  currentCityText: string;
  currentMoodEmoji: string;
  currentMoodLevel: string;
  currentMoodRelativeTime: string;
  localTime: string;
  profilePictureUrl: string;
  todaysFood: Food;

  // Arrays
  recentPhotos: Photo[];
  recentCommits: Commit[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<MyData>('https://latelynatelaclaire-backend.now.sh/api.json').pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError(error);
  }
}
