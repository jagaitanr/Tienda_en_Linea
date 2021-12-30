import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { VariablesGlobales } from 'app/common/Variables-globales';

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
    this.resetearVariables();//de local storage limpiarlas



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
    //localStorage.setItem("VariablesGlobales.pagina_actual", "catalogo");
    localStorage.setItem("VariablesGlobales.pagina_actual", "catalogo");
  
  }

}

resetearVariables(){
  
    for (let i=0; i<=19; i++){  
      let nombre:string='ProductosApartadosNombre'+ String(i);//se prepara para crear una variable localhost
      let precio:string='ProductosApartadosPrecio'+ String(i);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
      let imagen:string='ProductosApartadosImagen'+ String(i);
      let enCanasta:string = 'ProductosApartadosenCanasta'+ String(i);
    localStorage.setItem(nombre, '');
    localStorage.setItem(precio, '');
    localStorage.setItem(unidadesDispo, '');
    localStorage.setItem(unidadesApart, '');
    localStorage.setItem(imagen, '');
    localStorage.setItem(enCanasta, 'false'); //determina si x producto esta en el carrito
    localStorage.setItem('productosenCanasta', '0');// cantidad de la variedad de productos que se meten al carrito
    
    }

}

}
