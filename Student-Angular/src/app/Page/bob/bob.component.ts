import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesService, Countries } from '../../services/countries.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bob',
  imports: [MatPaginatorModule, NgxPaginationModule, CommonModule, FormsModule],
  templateUrl: './bob.component.html',
  styleUrl: './bob.component.css'
})
export class BobComponent {
  constructor(private countriesService: CountriesService , private http: HttpClient){}
  countryName : string = '';
  countryData : any[] = [];

  //paginate
  data = Array.from({length:50}, (_,i) =>({id: i+1, name:'Item ${i+1}'}));
  page = 1;

  ngOnInit(): void{
    this.countriesService.getCountries().subscribe(data => {
      this.countryData = data;
    })
  }
  searchCountries(): void {
    if (this.countryName.trim()) {
      this.countriesService.searchCountry(this.countryName).subscribe(data => {
        this.countryData = data;
      });
    } 
  }
}
