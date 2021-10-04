import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './shared/components/login-form/loginForm.component';
import { PasoapasoComponent } from './pages/page-1/components/pasoapaso/pasoapaso.component';
import { DestacadoComponent } from './shared/components/destacado/destacado.component';
import { SingupComponent } from './pages/page-2/components/singup/singup.component';
import { HeaderModule } from './shared/components/header/header.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PasoapasoComponent,
    DestacadoComponent,
    SingupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
