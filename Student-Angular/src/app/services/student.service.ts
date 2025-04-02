import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student{
  id? :number;
  name : string;
  isComplete : boolean;

}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5275/api/student';

  constructor (private http: HttpClient) {}

  getStudent(): Observable<any>
  {
    return this.http.get<any>(this.apiUrl);
  }
  addStudent( student: Student ) :  Observable<Student>
  {
    return this.http.post<Student>(this.apiUrl, student);
  }
  deleteStudent( id: number ) :  Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getStudentId( id: number): Observable<Student>
  {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }
  searchStudent(name: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/search/${name}`);
  }
  // updateStudent(id: number, student: Student): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/${id}`, student);
  // }
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student);
  }
}
