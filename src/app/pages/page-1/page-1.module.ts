import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Page } from './pages/page-1-page/page-1-page';


@NgModule({
  declarations: [
    Page1Page,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Page1Page
  ]
})
export class Page1Module { }
 
