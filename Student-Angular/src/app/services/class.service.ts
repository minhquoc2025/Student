import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.service';


export interface Class{
  id? :number;
  name : string;
}
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiURL = 'http://localhost:5275/api/class';

  constructor(private http: HttpClient) { }

  postClass( aaa: Class ) : Observable<Class>
  {
    return this.http.post<Student>(this.apiURL, aaa);
  }
  deleteClass( id:number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
  updateClass(aaa:Class):Observable<Class>
  {
    return this.http.put<Class>(`${this.apiURL}/${aaa.id}`, aaa);
  }
  getClass(): Observable<any>
  {
    return this.http.get<any>(this.apiURL);
  }
  getClassId (id:number):Observable<Class>
  {
    return this.http.get<Class>(`${this.apiURL}/${id}`);
  }
}
