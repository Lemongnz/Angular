import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Page } from './pages/page-1-page/page-1-page';
import { SharedModule } from '../../shared/shared.module';
import { PasoapasoComponent } from './components/pasoapaso/pasoapaso.component';


@NgModule({
  declarations: [
    Page1Page,
    PasoapasoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PasoapasoComponent,
    Page1Page,
  ]
})
export class Page1Module { }
 
