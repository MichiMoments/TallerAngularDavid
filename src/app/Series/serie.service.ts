import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './Serie';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getAvgSeasons(series: Array<Serie>): number{
    let avgSeasons: number = 0;
    series.forEach((serie) => avgSeasons = avgSeasons + serie.seasons);
    avgSeasons = avgSeasons/series.length;
    return avgSeasons;
  }

}
