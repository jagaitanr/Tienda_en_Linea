import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validator, Validators } from  '@angular/forms';
=======
import {  FormGroup,   FormBuilder,   FormControl,   Validators } from "@angular/forms";

//import {userAsyncValidator } from './ValidatorsForms/usuario.directive';
//import {UserService } from './Services/user.service';

>>>>>>> origin/main

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
  
})

export class InicioSesionComponent implements OnInit {

<<<<<<< HEAD
  miFormulario: FormGroup;
  constructor() { }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'correo' :new FormControl('', Validators.required),
      'password' :new FormControl('', Validators.required),
    })
  }

enviarFormulario(){
  console.log(this.miFormulario);

}

}
=======
  titulo = 'esta es mi página de inicio de sesion';
  nombreUsuario = 'PepitoPerez';
  contraseña  = '12345';

  
    //  public loginForm:FormGroup;
    /* constructor(private fb:FormBuilder) {
    
    }
    */
    myForm: FormGroup;
    constructor(public fb:FormBuilder)
    {
      this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      });
    }
    ngOnInit() {}
    saveData(){console.log(this.myForm.value);} 
  }
>>>>>>> origin/main
