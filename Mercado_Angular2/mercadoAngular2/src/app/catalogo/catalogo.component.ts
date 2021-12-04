import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/productos.json';
import { UserService } from 'app/Services/user.service';
import { DetalleproductoComponent } from 'app/detalleproducto/detalleproducto.component';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { summaryFileName } from '@angular/compiler/src/aot/summary_serializer';
//import { fstat } from 'fs';
import { readFile } from 'fs';
import { DataService } from 'app/data.service';
import { HttpService } from 'app/http.service';
import { Response } from '@angular/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { getDatabase, ref, child, get,  } from '@firebase/database';
import { stringify } from 'querystring';




@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
  })


export class CatalogoComponent implements OnInit{
    vegetales: String [] = [];
    vegetales2:any;
    Variable1:DataService;
    paginaCatalogo:string;

  constructor(private dataService: DataService, httpService: HttpService){}
  
  ngOnInit(){
    localStorage.setItem(  "activo" , this.paginaCatalogo)
    
  }
  mostrarBaseDatos () {
      this.vegetales = this.dataService.getVegetales();
      console.log("la base de datos es: " + this.vegetales);
  }

  listadeProductos = this.dataService.getVegetales();

  leerNombre(nombre){
    console.log("el producto es: " + nombre);
    VariablesGlobales.detalle_producto=nombre;
    //VariablesGlobales.pagina_actual = "PagDetalleProducto";
    localStorage.setItem("VariablesGlobales.pagina_actual", "PagDetalleProducto")
   }
   /*
  ActualizarJson(cantidad, nombre){
    //var jsonfile = require ('jsonfile');
    var jsonfile = require ('fs');
    var file = 'assets/productos.json';
    var fs = require('fs');
    var params = {
    "nombre":"remolacha"
    }
    changeJson(3,params)//Ejecutalo;
    /*
function changeJson(id,params){
    jsonfile.readFile(file,function(err,data){
        if(err){
            console.error(err);
        }
        var productosTemp = data.toString(); // archivo Json temporal
        productosTemp = JSON.parse(productosTemp);
        // Leer los datos y modificarlos
        for(var i = 0; i < productosTemp.data.length;i++){
            if(id == productosTemp.data[i].id){
                console.log('id lo mismo');
                for(var key in params){
                    if(productosTemp.data[i][key]){
                        productosTemp.data[i][key] = params[key];
                    }
                }
            }
        }
        productosTemp.total = productosTemp.data.length;
        var str = JSON.stringify(productosTemp);
        //console.log(str);
        fs.writeFile(file,str,function(err){
            if(err){
                console.error(err);
            }
            console.log('-------------------- Modificado con éxito');
            console.log(productosTemp.data);
        })
    })
}
        }
 
 */       
 
  agregarProducto(imagenProducto, nombreProducto, precioProducto, unidadesDisponibles, posicionProducto, unidadesApartadas)
  {
 try{
    //let  productosAgregadosNombre: string []=[];
      let posicionInt = parseInt(posicionProducto);
      let nombre:string='ProductosApartadosNombre'+ String(posicionInt);//se prepara para crear una variable localhost
      let precio:string='ProductosApartadosPrecio'+ String(posicionInt);
      let unidadesDispo:string='ProductosApartadosUniDisponibles'+ String(posicionInt);
      let unidadesApart:string='ProductosApartadosUniApartadas'+ String(posicionInt);
      let imagen:string='ProductosApartadosImagen'+ String(posicionInt);
      let enCanasta:string = 'ProductosApartadosenCanasta'+ String(posicionInt);
      console.log ("el item es: "+posicionInt + posicionProducto);
      console.log ('la imagen a agregar es: '+ imagenProducto);
      console.log ('este articulo esta en canasta?: '+ localStorage.enCanasta);
      console.log ('el nombre del producto a agregar es : ' + nombreProducto);
      console.log ('el precio del producto a agregar es: ' + precioProducto);
      console.log ('las unidades disponibles del producto a agregar es: ' + unidadesDisponibles);
      console.log ('la posición en el catalogo es: ' + posicionInt);
      
      localStorage.setItem(nombre,nombreProducto);
      localStorage.setItem(precio,precioProducto);
      localStorage.setItem(unidadesDispo,unidadesDisponibles);
      //localStorage.setItem(unidadesApart,unidadesApartadas);
      localStorage.setItem(imagen,imagenProducto);
      
      
      
      if (localStorage.getItem(enCanasta)==='true'){ //si es verdadero se sumara al actual unidades apartadas
        var a = parseInt(localStorage.getItem(unidadesApart))+parseInt(unidadesApartadas);
        localStorage.setItem(unidadesApart,String(a)); //
        console.log ('las unidades apartadas para este producto son: ' + localStorage.getItem(unidadesApart));
        console.log('dentro del if');
    }
    
      else { 
           localStorage.setItem(enCanasta,'true'); //se registra que ya está en canasta
           console.log("entro al else"); //de lo contrario se iniciaran las variables en la posicion correspondiente
           localStorage.setItem(unidadesApart,unidadesApartadas);//se inicializar esta variable
           }

     
      console.log("los productos apartados son: ");
      for (let i=0; i<=20; i++){
          let nombreTemporal : string = "ProductosApartadosNombre"+ String(i)
          console.log (localStorage.getItem(nombreTemporal));
            }
      }//corchete del try
      catch(e){console.log ("el error es: "+ e);}
      //console.log (VariablesGlobales.productosAnadidosApartados);
      
      /*const db = getDatabase();
      const newKey = push(child(ref(db),nombreProducto)).key;*/
      //this.vegetales2 = this.dataService.postVegetales(nombreProducto); // para agregar productos nuevos
   
     //this.dataService.agregarProductoA(10, numerodeProductos); //actualizar productos
     
  }

  ComprarProducto(nombreProducto, numerodeProductos, unidadesDisponibles)
  {
      console.log ('el producto a modificar es: '+ nombreProducto);
      console.log ('la cantidad de artículos a agregar es: '+ numerodeProductos);
      console.log ('las unidades disponibles actuales son: '+ unidadesDisponibles);
      /*const db = getDatabase();
      const newKey = push(child(ref(db),nombreProducto)).key;*/
      //this.vegetales2 = this.dataService.postVegetales(nombreProducto); // para agregar productos nuevos
   
     this.dataService.agregarProductoA(10, numerodeProductos); //actualizar productos
  }

  MensajePadre = "ajo";

  listadeProductos2 : any = data;
  //console.log('los productos en canasta son:' +VariablesGlobales.productoenCanasta); 
    

}