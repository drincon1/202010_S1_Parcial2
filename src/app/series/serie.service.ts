import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';
import { SerieDetail } from './serieDetail';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

private apiUrl = environment.baseUrl + 'series.json';
constructor(private http: HttpClient) { }

getSeries(): Observable<Array<Serie>> {
  return this.http.get<Array<Serie>>(this.apiUrl);
}

getSerieDetail(serieId): Observable<SerieDetail> {
  return this.http.get<SerieDetail>(`${this.apiUrl}/${serieId}`);
}


}
