import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { stringify } from 'querystring';
import * as data from '../../assets/productos.json';
import { UserService } from 'app/Services/user.service';
import { DetalleproductoComponent } from 'app/detalleproducto/detalleproducto.component';
import { summaryFileName } from '@angular/compiler/src/aot/summary_serializer';
//import { fstat } from 'fs';
import { readFile } from 'fs';
import { DataService } from 'app/data.service';
import { HttpService } from 'app/http.service';
import { Response } from '@angular/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { getDatabase, ref, child, get,  } from '@firebase/database';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit   {

  constructor() { }
  arreglo: any [] = [];
 arreglo2: any[]=[];
 //lista:any []= [{imagen:VariablesGlobales.productosAnadidosImagen, nombre:'uno', precio:2000 },{ nombre:'dos',precio:1500}];
  ngOnInit() {
    
    this.escribirArreglo();

    //  VariablesGlobales.productoenCanasta[i] = localStorage.getItem(a); //recupero los datos
        }
     

quitarProducto(nombreQuitar){
   let p = this.arreglo.length;
   for (let i=0; i<=20; i++)
   {
     let b = 'ProductosApartadosNombre'+String(i);
     let c = 'ProductosApartadosenCanasta'+String(i)
     if (localStorage.getItem(b)===nombreQuitar)
     {
       localStorage.setItem(c,'false');
       this.ngOnInit();
     }
   }
   
   
}

escribirArreglo()
   {
  
    let j=0;
    for (let i=0 ; i<=20 ; i++){
    
    
      let nombre = 'ProductosApartadosNombre'+String(i);
      let precio:string='ProductosApartadosPrecio'+ String(i);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
      let imagen:string='ProductosApartadosImagen'+ String(i);
      let a = 'ProductosApartadosenCanasta'+String(i);
      
    if (localStorage.getItem(a)==='true')
      {
      console.log(String(i)+localStorage.getItem(nombre));
      this.arreglo[j]= {imagen:localStorage.getItem(imagen), nombre:localStorage.getItem(nombre), precio: localStorage.getItem(precio), unidadesDisponibles:localStorage.getItem(unidadesDispo), unidadesApartadas:localStorage.getItem(unidadesApart) };
      j=j+1;  
    }
   }
   let s = this.arreglo.length;
   this.arreglo.splice(s+1,1); //eliminar el ultimo objeto del arreglo
   }
  retornarPagina(){
    //VariablesGlobales.pagina_actual='catalogo';
    localStorage.setItem("VariablesGlobales.pagina_actual","catalogo")

    console.log("estoy en retornar pagina: "+ VariablesGlobales.pagina_actual);
    }
     //arreglo3: any []=[];
     arreglo3 = this.arreglo;
     //console.log("el arreglo es: " + arreglo3);
}
