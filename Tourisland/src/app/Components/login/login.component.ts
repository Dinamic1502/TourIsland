import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
//creo variable de mi correo
  public email ='miguel.perez-1994@hotmail.com';
  constructor() { }

  ngOnInit() {}

}
