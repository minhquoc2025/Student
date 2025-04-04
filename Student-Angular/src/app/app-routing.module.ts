import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BobComponent } from './Page/bob/bob.component';

const routes: Routes = [
  { path: '/bob', component: BobComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Truyền biến routes vào đây
  exports: [RouterModule]
})
export class AppRoutingModule { }
