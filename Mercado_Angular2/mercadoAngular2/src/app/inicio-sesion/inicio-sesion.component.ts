import { Component, OnInit } from '@angular/core';
//import {InicioSesionComponent} from './inicio-sesion.component'
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

import {userAsyncValidator } from './ValidatorsForms/usuario.directive';
import {UserService } from './Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
  
})
export class InicioSesionComponent implements OnInit {
  email: string;
  password: string;

  titulo = 'esta es mi página de inicio de sesion';

<<<<<<< HEAD
  ngOnInit() {
    console.log(this.email);
    console.log(this.password);
  }
=======
  nombreUsuario = 'PepitoPerez';
  contraseña  = '12345';
>>>>>>> 209fd19d004c7a8ab899fb84a9e70e5857edab37

  
  public loginForm:FormGroup;
  constructor(private fb:FormBuilder) {
    
   }

  public ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: new FormControl("", [Validators.required], [userAsyncValidator(this.userService)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)])
  }
 public sendLogin(){}
}
