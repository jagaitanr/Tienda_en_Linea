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
import internal from 'assert';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit   {

  constructor(private httpService : HttpService, private http: HttpService) {}
  arreglo: any [] = [];
  total_1: number;
  total_2: string;
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
       console.log("se va a quitar: "+localStorage.getItem(b));
       console.log("falso o verdadero:" + localStorage.getItem(c));
     }
   }
   
   
}

escribirArreglo()
   {
    
    let j=0;
    let s = this.arreglo.length;
    this.arreglo.splice(s-1,1); //para quitar el último elemento del arreglo y poder reescribir
    console.log("la longitud del arreglo es: "+s);
    let total = 0;
    for (let i=0 ; i<=20 ; i++){
    
    
      let nombre = 'ProductosApartadosNombre'+String(i);
      let precio:string='ProductosApartadosPrecio'+ String(i);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
      let imagen:string='ProductosApartadosImagen'+ String(i);
      let a = 'ProductosApartadosenCanasta'+String(i);
      let b = 'ProductosApartadosSubtotal'+ String(i);
      let c = parseInt(localStorage.getItem(precio))* parseInt(localStorage.getItem(unidadesApart));
      let d = String(c);
      
      
       
    if (localStorage.getItem(a)==='true')
      {
      total = total + c;
      this.total_1 = total;
      this.total_2 = '$ '+String(total);
      console.log("el total es: "+ this.total_1);
      console.log(String(i)+localStorage.getItem(nombre));
      this.arreglo[j]= {imagen:localStorage.getItem(imagen), nombre:localStorage.getItem(nombre),
         precio: localStorage.getItem(precio), unidadesDisponibles:localStorage.getItem(unidadesDispo),
          unidadesApartadas:localStorage.getItem(unidadesApart), posicion:i, subtotal:d};
          let d_unidadesDisponibles = parseInt(this.arreglo[i].unidadesDisponibles)-parseInt(this.arreglo[i].unidadesApartadas);
      
          console.log("el arreglo en este punto es: "+ JSON.stringify(this.arreglo[j]));
          j=j+1;  
      }
    }
   }

   cancelarProductos(){
    for (let i=0; i<=20; i++){
    let a = 'ProductosApartadosenCanasta'+String(i);
    localStorage.setItem(a,'false');
    this.escribirArreglo();
     } 
      this.total_1 = 0;
      this.total_2 = '$ '+String(this.total_1);

   }

   comprarProductos(){
    

    let  s = this.arreglo3.length;

      for (let i=0; i<=s; i++)
      {

      
      let nombre = 'ProductosApartadosNombre'+String(i);
      let precio:string='ProductosApartadosPrecio'+ String(i);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
      let imagen:string='ProductosApartadosImagen'+ String(i);
      
      let pos = this.arreglo[i].posicion;
      let a_imagen = this.arreglo[i].imagen;
      let b_nombre = this.arreglo[i].nombre;
      let c_precio = parseInt(this.arreglo[i].precio);
      let d_unidadesDisponibles = parseInt(this.arreglo[i].unidades_disponibles)-parseInt(this.arreglo3[i].unidadesApartadas[i]);
      console.log("las unidades disponibles son: "+ d_unidadesDisponibles);
      
      

    this.httpService.agregarProducto(pos, a_imagen, b_nombre, c_precio, d_unidadesDisponibles);
      
      }
   }

  retornarPagina(){
    //VariablesGlobales.pagina_actual='catalogo';
    localStorage.setItem("VariablesGlobales.pagina_actual","catalogo")

    console.log("estoy en retornar pagina: "+ VariablesGlobales.pagina_actual);
    }
     arreglo3 = this.arreglo;
     }
