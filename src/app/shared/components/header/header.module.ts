import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderPage } from './pages/header-page/header-page';


@NgModule({
  declarations: [
    LogoComponent,
    LoginComponent,
    MenuComponent,
    HeaderPage
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LogoComponent,
    LoginComponent,
    MenuComponent,
    HeaderPage
  ]
})
export class HeaderModule { }
 
