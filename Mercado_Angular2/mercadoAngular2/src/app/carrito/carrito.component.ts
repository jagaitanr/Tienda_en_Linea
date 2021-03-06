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
import { CatalogoComponent } from 'app/catalogo/catalogo.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit   {

  constructor(private httpService : HttpService, private http: HttpService, private dataService : DataService) {}
  arreglo: any [] = [];
  total_1: number;
  total_2: string;
 arreglo2: any[]=[];
 //lista:any []= [{imagen:VariablesGlobales.productosAnadidosImagen, nombre:'uno', precio:2000 },{ nombre:'dos',precio:1500}];
 
 cantProdCanasta=parseInt(localStorage.getItem('productosenCanasta'));
 ngOnInit() {
    
    this.escribirArreglo();
 }
   
    //  VariablesGlobales.productoenCanasta[i] = localStorage.getItem(a); //recupero los datos
        
     

quitarProducto(nombreQuitar){
   let p = this.arreglo.length;
   for (let i=0; i<=20; i++)
   {
     let b = 'ProductosApartadosNombre'+String(i);
     let c = 'ProductosApartadosenCanasta'+String(i)
     if (localStorage.getItem(b)===nombreQuitar)
     {
       localStorage.setItem(c,'false');
       console.log("se va a quitar: "+localStorage.getItem(b));
       console.log("falso o verdadero:" + localStorage.getItem(c));
       let m = parseInt(localStorage.getItem('CantidadproductosenCanasta'));//para restar 1 a la variedad de productos
      if (m>=0){
        m=m-1;
        localStorage.setItem('CantidadproductosenCanasta',String(m))}//actualizamos la variedad de productos
      }
        
   }
   this.dataService.cambioCanasta(); //invoco el servicio para que genere el evento de cambio en el valor de productos diferentes en canasta
   this.ngOnInit();
  }

escribirArreglo()
   {
    
    let j=0;
    //let s = this.arreglo.length;
    let s = parseInt(localStorage.getItem('CantidadproductosenCanasta'));
    this.arreglo.splice(s-1,1); //para quitar el ??ltimo elemento del arreglo y poder reescribir
    //localStorage.setItem('productosenCanasta',String(s));
    let total = 0;
    for (let i=0 ; i<=20 ; i++){ //este bucle me permite renombrar las variables para ir leyendolas del localstorage cada uno de los parametros del producto
    
    
      let nombre = 'ProductosApartadosNombre'+String(i);
      let precio:string='ProductosApartadosPrecio'+ String(i);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
      let imagen:string='ProductosApartadosImagen'+ String(i);
      let posicion_:string='ProductosApartadosPosicion' + String(i);
      let a = 'ProductosApartadosenCanasta'+String(i);
      let b = 'ProductosApartadosSubtotal'+ String(i);
      let c = parseInt(localStorage.getItem(precio))* parseInt(localStorage.getItem(unidadesApart));
      let d = String(c);
      let pos:number = i;
      
      
       
    if (localStorage.getItem(a)==='true')  //si el producto esta en la canasta se hacen las operaciones respectivas
      {
      total = total + c;
      this.total_1 = total;
      this.total_2 = '$ '+String(total);
      console.log("el total es: "+ this.total_1);
      console.log(String(i)+localStorage.getItem(nombre));
      this.arreglo[j]= {imagen:localStorage.getItem(imagen), nombre:localStorage.getItem(nombre),
         precio: localStorage.getItem(precio), unidadesDisponibles:localStorage.getItem(unidadesDispo),
          unidadesApartadas:localStorage.getItem(unidadesApart), posicion:localStorage.getItem(posicion_), subtotal:d};
          //let d_unidadesDisponibles = parseInt(this.arreglo[j].unidadesDisponibles)-parseInt(this.arreglo[j].unidadesApartadas);
          //console.log("las unidades disponibles son: "+ d_unidadesDisponibles);
          //onsole.log("el arreglo en este punto es: "+ JSON.stringify(this.arreglo[j]));
          j=j+1;  
      }
    }
    let k=(this.arreglo.length);  //ac?? tomo el largo del arrego que est?? en carrito para tener en cuenta los
    console.log("la longitud del arreglo es: ", String(k));//productos que se quitan y actualizar en la notificaci??n
    localStorage.setItem('productosenCanasta', String(k));//la cantidad de  productos diferentes en canasta
    
   }

   cancelarProductos(){
    for (let i=0; i<=20; i++){
    let a = 'ProductosApartadosenCanasta'+String(i);
    localStorage.setItem(a,'false');
    this.escribirArreglo();
     } 
      this.total_1 = 0;
      this.total_2 = '$ '+String(this.total_1);
     localStorage.setItem('productosenCanasta','0');
     this.dataService.cambioCanasta();
   }

   comprarProductos(){
    

    let  s = this.arreglo.length;

      for (let i=0; i<=s-1; i++)
      {

      
      let nombre = 'ProductosApartadosNombre'+String(i);
      let precio:string='ProductosApartadosPrecio'+ String(i);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
      let imagen:string='ProductosApartadosImagen'+ String(i);
      
        let pos = this.arreglo[i].posicion;
      console.log("la posicion es: "+ (this.arreglo[i].posicion));
      let a_imagen = this.arreglo[i].imagen;
      console.log("la imagen es: "+ (this.arreglo[i].imagen));
      let b_nombre = this.arreglo[i].nombre;
      console.log("el nombre es: "+ (this.arreglo[i].nombre));
      let c_precio = this.arreglo[i].precio;
      console.log("el precio  es: "+ (this.arreglo[i].precio));
      let d_unidadesDisponibles = String(parseInt(this.arreglo[i].unidadesDisponibles)-parseInt(this.arreglo[i].unidadesApartadas));
      console.log("las unidades disponibles son: "+ d_unidadesDisponibles);
      
     

    this.httpService.agregarProducto(pos, a_imagen, b_nombre, c_precio, d_unidadesDisponibles); //hace la actualizaci??n en la base de datos
  this.resetearVariables(); //resetear las variables para volver a empezar sin ir hasta inicio sesion    
  }

      
      for (let i=0; i<=20; i++){
        let a = 'ProductosApartadosenCanasta'+String(i);
        localStorage.setItem(a,'false');
        this.escribirArreglo();
         } 
      localStorage.setItem('productosenCanasta','0');
      this.retornarPagina();
      this.dataService.cambioCanasta();//actualizar la notificaci??n en la barra superios
        
   }

  retornarPagina(){
    //VariablesGlobales.pagina_actual='catalogo';
    localStorage.setItem("VariablesGlobales.pagina_actual","catalogo")

    console.log("estoy en retornar pagina: "+ localStorage.getItem("VariablesGlobales.pagina_actual"));
    this.dataService.actualizarPagPrincipal();  
  }
     arreglo3 = this.arreglo;


     resetearVariables(){  //cuando se compra se debe resetear y vaciar la canasta y dejar disponibles nuevamente los productos
      //reseteando todas las variables involucradas
  console.log('entro a resetear variables despu??s de la rutina de compra');
      for (let i=0; i<=20; i++){  
        let nombre:string='ProductosApartadosNombre'+ String(i);//se prepara para crear una variable localhost
        let precio:string='ProductosApartadosPrecio'+ String(i);
        let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(i);
        let unidadesApart:string='ProductosApartadosUniApartadas'+ String(i);
        let imagen:string='ProductosApartadosImagen'+ String(i);
        let enCanasta:string = 'ProductosApartadosenCanasta'+ String(i);//determina si i producto esta en canasta
        let posicion:string = 'ProductosApartadosPosicion'+ String(i);
      localStorage.setItem(nombre, '');
      localStorage.setItem(precio, '');
      localStorage.setItem(unidadesDispo, '');
      localStorage.setItem(unidadesApart, '');
      localStorage.setItem(imagen, '');
      localStorage.setItem(enCanasta, 'false'); //con el false saca el producto de la canasta  
      localStorage.setItem('CantidadproductosenCanasta', '0');// cantidad de la variedad de productos que se meten al carrito
      
      }
  
  }
    }

