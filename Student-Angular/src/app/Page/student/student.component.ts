import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule, MatPaginatorModule, NgxPaginationModule, RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  [x: string]: any;
  title = 'Student-Angular';
  studentData: any[] = [];
  searchData: any[] = [];
  selectedStudent: Student | null = null;
  searchName: string = '';
  newStudent: Student = { name: '', isComplete: true }
  constructor(private studentService: StudentService, private http: HttpClient) { }

  //paginate
  data = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: 'Item ${i+1}' }));
  page = 1;

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(data => {
      this.studentData = data;
    })
  }
  loadStudent(): void {
    this.studentService.getStudent().subscribe(data => {
      this.studentData = data;
    })
  }
  addStudent(): void {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.loadStudent();
      this.newStudent = { name: '', isComplete: true };
    });
  }
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudent();
    })
  }

  editStudent(id: any) {
    this.studentService.getStudentId(id).subscribe((res: any) => {
      this.selectedStudent = res;
    });
  }
  updateStudent(): void {
    if (this.selectedStudent) {
      this.studentService.updateStudent(this.selectedStudent).subscribe(() => {
        this.loadStudent();
        this.selectedStudent = null;
      });
    }
  }

  searchStudent(): void {
    if (this.searchName.trim()) {
      this.studentService.searchStudent(this.searchName).subscribe(data => {
        this.studentData = data;
      });
    } else {
      this.ngOnInit();
    }
  }
}
