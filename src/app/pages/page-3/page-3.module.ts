import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { Page3Page } from './page-3-page/page-3-page'

@NgModule({
  declarations: [
    Page3Page
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class Page3Module { }
 
