import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResearchBook } from '../research-book';
@Injectable({
  providedIn: 'root'
})
export class ResearchBookServiceService {

  private apiUrl = 'https://localhost:44380/api/';
  private researchBookCreatedSubject = new Subject<ResearchBook>()

  constructor(private http: HttpClient) {}

  getResearchBooksbyUserId(userId:number): Observable<any> {
    console.log(this.apiUrl + `GetResearchBooksByUserId/${userId}`);
    return this.http.get(this.apiUrl + `ResearchBooks/GetResearchBooksByUserId/${userId}`);
  }
  getUserById(userId: number): Observable<any> {
    console.log(this.apiUrl + `User/GetUserById/${userId}`)
    return this.http.get(this.apiUrl + `User/GetUserById/${userId}`).pipe(
      catchError((error: any) => {
        console.error('Error getting user:', error);
        return throwError('Something went wrong');
      })
    );
  }
  
  
  // createResearchBook(researchBook: any): Observable<any> {
  //   return this.http.post(this.apiUrl + 'ResearchBooks', researchBook)
  //     .pipe(
  //       tap((response: any) => {
  //         this.researchBookCreatedSubject.next(response);
  //       })
  //     );
  // }
  createResearchBook(userId: number, researchBook: any): Observable<any> {
    return this.http.post(this.apiUrl + `ResearchBooks/${userId}`, researchBook).pipe(
      tap((response: any) => {
        this.researchBookCreatedSubject.next(response);
      }),
      catchError((error: any) => {
        console.error('Error creating research book:', error);
        return throwError('Something went wrong');
      })
    );
  }
  
}
