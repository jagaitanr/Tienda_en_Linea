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
 lista:any []= [{imagen:VariablesGlobales.productosAnadidosImagen, nombre:'uno', precio:2000 },{ nombre:'dos',precio:1500}];
  ngOnInit() {
    for (let i=0 ; i<=20 ; i++){
      let a = 'productoenCanasta'+String(i);
      VariablesGlobales.productoenCanasta[i] = localStorage.getItem(a); //recupero los datos
    console.log(a);
  }
    console.log('los productos en canasta son:' +VariablesGlobales.productoenCanasta);
    let j=0;
    for (let i=0; i<=20; i++){

      //if (VariablesGlobales.productoenCanasta[i]==='true'){
      if (localStorage.getItem("productoenCanasta"[i])=="true"){
      this.arreglo[j]={imagen:localStorage.getItem("productosAgregadosNombre"[j]),
        //this.arreglo[j]={imagen:VariablesGlobales.productosAnadidosImagen[i],
      nombre:localStorage.getItem("productosAgregadosNombre"[j]),
        //nombre:VariablesGlobales.productosAnadidosNombre[i],
      precop:localStorage.getItem("productosAgregadosPrecio"[j]),
        //precio:VariablesGlobales.productosAnadidosPrecio[i],
      unidadesDisponibles:localStorage.getItem("productosAgregadosUdisponibles"[j])}

        //unidadesDisponibles:VariablesGlobales.productosAnadidosApartados[i]}
            //this.arreglo2[j]='{imagen:"'+VariablesGlobales.productosAnadidosImagen[i]+'" }'
      j=j+1;
          }
    }
    let a = this.arreglo.length;
    console.log ("los productos apartados son: "+ this.arreglo);
    }

  retornarPagina(){
    //VariablesGlobales.pagina_actual='catalogo';
    localStorage.setItem("VariablesGlobales.pagina_actual","catalogo")

    console.log("estoy en retornar pagina: "+ VariablesGlobales.pagina_actual);
    }
}
