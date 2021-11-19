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


export class CatalogoComponent{
    vegetales: String [] = [];
    vegetales2:any;
    Variable1:DataService;

    constructor(private dataService: DataService, httpService: HttpService){}
  
  mostrarBaseDatos () {
      this.vegetales = this.dataService.getVegetales();
      console.log("la base de datos es: " + this.vegetales);
  }
  listadeProductos = this.dataService.getVegetales();
  /*
  agregarProducto(nombre){
    //  this.dataService.agregarProductoData(nombre , 3500, 'imagen', 100);
  }
  */
  leerNombre(nombre){
    console.log("el producto es: " + nombre);
    VariablesGlobales.detalle_producto=nombre;
    VariablesGlobales.pagina_actual = "PagDetalleProducto";
  
   }
  ActualizarJson(cantidad, nombre){
    //var jsonfile = require ('jsonfile');
    var jsonfile = require ('fs');
    var file = 'assets/productos.json';
    var fs = require('fs');
    var params = {
    "nombre":"remolacha"
    }
    changeJson(3,params)//Ejecutalo;

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
 
 /*
  AgregandoProductos(NumerodeProductos, nombreProducto, unidades_disponibles){
    var yaEstaProducto = false;   
    for (let i=0; i<=VariablesGlobales.productosCanasta; i++){  //recorre el arreglo para revisar si ya esta en la canasta el producto si es así simplemente suma la cantidad a añadir
        if (VariablesGlobales.productosAñadidosNombre[i]===nombreProducto){
            
          VariablesGlobales.productosAñadidosCantidad[i] = Number(VariablesGlobales.productosAñadidosCantidad[i]) + Number(NumerodeProductos);
          this.ActualizarJson(VariablesGlobales.productosAñadidosCantidad[i], nombreProducto);
          console.log("dentro del if "+ i);
           i=VariablesGlobales.productosCanasta+1;//para sacarlo de for ya que encontró el mismo producto y no es necesario revisar más
           yaEstaProducto=true; // si encuentra un producto igual
          }
      }
      if (!yaEstaProducto){
        VariablesGlobales.productosAñadidosNombre[VariablesGlobales.productosCanasta]= nombreProducto;
        VariablesGlobales.productosAñadidosCantidad[VariablesGlobales.productosCanasta]= Number(NumerodeProductos);
        VariablesGlobales.productosCanasta=Number(VariablesGlobales.productosCanasta)+1;
  }
        console.log (VariablesGlobales.productosAñadidosNombre); 
        console.log (VariablesGlobales.productosAñadidosCantidad); 
        console.log (VariablesGlobales.productosCanasta);
    
    
  }  */
  agregarProducto(imagenProducto, nombreProducto, precioProducto, unidadesDisponibles, posicionProducto, unidadesApartadas)
  {
      console.log ('la imagen a agregar es: '+ imagenProducto);
      console.log ('este articulo esta en canasta?: '+ VariablesGlobales.productoenCanasta[posicionProducto]);
      console.log ('el nombre del producto a agregar es : ' + nombreProducto);
      console.log ('el precio del producto a agregar es: ' + precioProducto);
      console.log ('las unidades disponibles del producto a agregar es: ' + unidadesDisponibles);
      console.log ('la posici[on en el catalogo es]: ' + posicionProducto);
      console.log ('las unidades apartadas para este producto es: ' + unidadesApartadas);
      console.log(VariablesGlobales.productosAnadidosImagen[2]);
      console.log ('este articulo esta en canasta?: '+ VariablesGlobales.productoenCanasta[posicionProducto]);
      if (VariablesGlobales.productoenCanasta[posicionProducto]==='true'){ //si es verdadero se sumara al actual unidades apartadas
        VariablesGlobales.productosAnadidosApartados[posicionProducto]=VariablesGlobales.productosAnadidosApartados[posicionProducto]+ parseInt(unidadesApartadas);
        
    }

      else {  //de lo contrario se iniciaran las variables en la posicion correspondiente
        VariablesGlobales.productosAnadidosImagen[posicionProducto]=imagenProducto;
        VariablesGlobales.productosAnadidosNombre[posicionProducto]=nombreProducto;
        VariablesGlobales.productosAnadidosPrecio[posicionProducto]=parseInt(precioProducto);
        VariablesGlobales.productosAnadidosUdisponibles[posicionProducto]=parseInt(unidadesDisponibles);
        VariablesGlobales.productosAnadidosPosicion[posicionProducto]=parseInt(posicionProducto);
        VariablesGlobales.productosAnadidosApartados[posicionProducto]=parseInt(unidadesApartadas);
        VariablesGlobales.productoenCanasta[posicionProducto]='true';
      }
      for (let i=0; i<=20; i++){
         let a = 'productoenCanasta'+String(i);
        //console.log(a);
        localStorage.setItem( a ,VariablesGlobales.productoenCanasta[i])//se guarda en una variable local producto en canasta para abrirlo en la pagina de carrito
      }
      console.log (VariablesGlobales.productosAnadidosNombre);
      console.log (VariablesGlobales.productosAnadidosApartados);
      
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
