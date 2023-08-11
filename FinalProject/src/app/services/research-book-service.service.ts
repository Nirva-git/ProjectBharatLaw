import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , tap , Subject} from 'rxjs';
import { ResearchBook } from '../research-book';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookServiceService {

  private apiUrl = 'https://localhost:44380/api/';
  private researchBookCreatedSubject = new Subject<ResearchBook>()

  constructor(private http: HttpClient) {}

  getResearchBooks(): Observable<any> {
    return this.http.get(this.apiUrl + 'ResearchBooks');
  }

  createResearchBook(researchBook: any): Observable<any> {
    return this.http.post(this.apiUrl + 'ResearchBooks', researchBook)
      .pipe(
        tap((response: any) => {
          this.researchBookCreatedSubject.next(response);
        })
      );
  }
}
