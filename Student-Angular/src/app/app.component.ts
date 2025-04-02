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
  searchName: string = '';
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
  editStudent(student: Student): void {
    this.selectedStudent = { ...student }; 
  }
  updateStudent(): void {
    // if (this.selectedStudent) {
    //   this.studentService.updateStudent(this.selectedStudent.id!, this.selectedStudent).subscribe(() => {
    //     this.loadStudent();
    //     this.selectedStudent = null;
    //   });
    // }
    if (!this.selectedStudent) return;

    this.studentService.updateStudent(this.selectedStudent).subscribe(updatedStudent => {
      const index = this.studentData.findIndex(s => s.id === updatedStudent.id);
      if (index !== -1) {
        this.studentData[index] = updatedStudent; // Cập nhật danh sách
      }
      this.selectedStudent = null; // Thoát chế độ chỉnh sửa
    }, error => {
      console.error("Lỗi cập nhật sinh viên:", error);
    });
  }
  searchStudent(): void {
    if (this.searchName.trim()) {
      this.studentService.searchStudent(this.searchName).subscribe(data => {
        this.studentData = data;
      });
    } else {
      this.loadStudent();
    }
  }
}
export class PaginatorOverviewExample {};