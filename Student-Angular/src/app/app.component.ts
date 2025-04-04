import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './block/header/header.component';
import { FooterComponent } from './block/footer/footer.component';
import {RouterModule} from '@angular/router';


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
