import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService, Student} from './services/student.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './block/header/header.component';
import { StudentComponent } from './Page/student/student.component';
import { FooterComponent } from './block/footer/footer.component';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BobComponent } from './Page/bob/bob.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule, 
    MatPaginatorModule, 
    NgxPaginationModule, 
    HeaderComponent, 
    FooterComponent, 
    RouterModule, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
