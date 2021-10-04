import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DestacadoComponent } from './components/destacado/destacado.component';
import { HeaderModule } from './components/header/header.module';
import { HeaderPage } from './components/header/pages/header-page/header-page';
import { LoginFormComponent } from './components/login-form/loginForm.component';


@NgModule({
    declarations: [
        DestacadoComponent,
        LoginFormComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule
    ],
    exports: [
        DestacadoComponent,
        LoginFormComponent,
    ]
})
export class SharedModule { }
