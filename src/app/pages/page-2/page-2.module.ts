import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SingupComponent } from './components/singup/singup.component';
import { Page2Page } from './page-2-page/page-2-page'

@NgModule({
  declarations: [
    Page2Page,
    SingupComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SingupComponent
  ]
})
export class Page2Module { }
 
