import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from  '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {

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
