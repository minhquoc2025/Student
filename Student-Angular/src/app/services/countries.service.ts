import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


export interface Countries{
  id? :number;
  name : string;
  latlng : string;
  population: string;
}
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }
  getCountries(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }
  searchCountry(name: string): Observable<Countries[]> {
      return this.http.get<Countries[]>(`${this.apiUrl}/name/${name}`);
    }
}
