import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { stringify } from 'querystring';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit   {

  constructor() { }
 arreglo: any [] = [''];
 arreglo2: string;
 
  ngOnInit() { 
    let j=0;
    for (let i=0; i<=20; i++){

      if (VariablesGlobales.productoenCanasta[i]===true){
      this.arreglo[j]='{"imagen":"'+VariablesGlobales.productosAnadidosImagen[i]+'",'+
      '"nombre":"'+VariablesGlobales.productosAnadidosNombre[i]+'",'+
      '"precio":'+VariablesGlobales.productosAnadidosPrecio[i]+','+
      '"unidadesDisponibles":'+VariablesGlobales.productosAnadidosApartados[i]+'}';
      }
      j=j+1;
    }
    this.arreglo[0]='['+this.arreglo[0];
    let a = this.arreglo.length;
    this.arreglo[a]=this.arreglo[a-1]+']';
    this.arreglo2=JSON.stringify(this.arreglo);
    console.log ("los productos apartados son: "+ this.arreglo2);
    }
    
  retornarPagina(){
    VariablesGlobales.pagina_actual='catalogo';
    console.log("estoy en retornar pagina: "+ VariablesGlobales.pagina_actual);
    }
}
