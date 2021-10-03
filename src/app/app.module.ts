import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './comp/login-form/loginForm.component';
import { PasoapasoComponent } from './comp/pasoapaso/pasoapaso.component';
import { DestacadoComponent } from './comp/destacado/destacado.component';
import { SingupComponent } from './comp/singup/singup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PasoapasoComponent,
    DestacadoComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
