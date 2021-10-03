import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderLogOut } from './pages/layout/layout';


@NgModule({
  declarations: [
    LogoComponent,
    LoginComponent,
    MenuComponent,
    HeaderLogOut
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LogoComponent,
    LoginComponent,
    MenuComponent,
    HeaderLogOut
  ]
})
export class HeaderModule { }
 
