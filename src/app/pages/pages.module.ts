import { NgModule } from '@angular/core';
import { Page1Module } from './page-1/page-1.module';
import { Page2Module } from './page-2/page-2.module';


@NgModule({
  imports: [
    Page1Module,
    Page2Module
  ],
})
export class PagesModule { }
