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
      this.arreglo[i]= {imagen:localStorage.getItem(imagen), nombre:localStorage.getItem(nombre), unidadesDisponibles:localStorage.getItem(unidadesDispo), unidadesApartadas:localStorage.getItem(unidadesApart) };
      }

    //  VariablesGlobales.productoenCanasta[i] = localStorage.getItem(a); //recupero los datos
        }
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
