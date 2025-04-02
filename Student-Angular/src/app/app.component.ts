import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService, Student} from './services/student.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'Student-Angular';
  studentData : any[] = [];
  selectedStudent : Student | null = null;
  newStudent: Student = {name:'', isComplete:true }
  constructor(private studentService: StudentService , private http: HttpClient){}

  ngOnInit() : void{
    this.studentService.getStudent().subscribe(data => {
      this.studentData = data;
    })
  }
  loadStudent(): void{
    this.studentService.getStudent().subscribe(data => {
      this.studentData = data;
    })
  }
  addStudent() : void{
    this.studentService.addStudent(this.newStudent).subscribe(()=>{
      this.loadStudent();
      this.newStudent = {name: '', isComplete: true};
    });
  }
  deleteStudent(id:number):void{
    this.studentService.deleteStudent(id).subscribe(()=>{
      this.loadStudent();
    })
  }
  editStudent(id:number):void{
    // this.selectedStudent = {...student};
  }
}
export class PaginatorOverviewExample {};