import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { Class, ClassService } from '../../services/class.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class',
  imports: [CommonModule, FormsModule, MatPaginatorModule, NgxPaginationModule, RouterModule],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class classComponent{
  [x: string]: any;
  title = "Class Page"
  classData : any[]=[];
  selectedClass : Class |null = null;
  newClass : Class = {name: ''}
  constructor(private classService: ClassService, private http:HttpClient){}

  ngOnInit(): void {
    this.classService.getClass().subscribe(data => {
      this.classData = data;
    })
  }
  addClass(): void {
    this.classService.postClass(this.newClass).subscribe(() => {
      this.ngOnInit();
      this.newClass = { name: '' };
    });
  }
  deleteClass(id: number): void {
    this.classService.deleteClass(id).subscribe(() => {
      this.ngOnInit();
    })
  }

  editClass(id: any) {
    this.classService.getClassId(id).subscribe((res: any) => {
      this.selectedClass = res;
    });
  }
  updateClass(): void {
    if (this.selectedClass) {
      this.classService.updateClass(this.selectedClass).subscribe(() => {
        this.ngOnInit();
        this.selectedClass = null;
      });
    }
  }

}
