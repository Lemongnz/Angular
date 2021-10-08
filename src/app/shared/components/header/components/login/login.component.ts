import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../../../login-form/loginForm.component'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;

  constructor(public $: MatDialog) { }

  openForm(){
    this.$.open(LoginFormComponent);
  }

  ngOnInit(): void { }
}
