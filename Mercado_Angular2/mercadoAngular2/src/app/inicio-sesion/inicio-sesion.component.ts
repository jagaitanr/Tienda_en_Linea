import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from  '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']

})

export class InicioSesionComponent implements OnInit {

  miFormulario: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      /*'correo' :new FormControl('', Validators.required),
      'password' :new FormControl('', Validators.required),*/
      'correo' :new FormControl(null, Validators.required),
      'password' :new FormControl(null, Validators.required),
    })
  }
/*
enviarFormulario(){
  console.log(this.miFormulario);
}*/

enviarFormulario(){
  let email_ = this.miFormulario.get('correo').value;
  let password_ = this.miFormulario.get('password').value;


  if (email_ ==='jagaitanr@hotmail.com' &&  password_ === '1234'){
    
    this.router.navigate(['/pagina-principal']);
  }

}

}
