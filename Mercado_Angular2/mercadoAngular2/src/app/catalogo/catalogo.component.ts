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



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
  })


export class CatalogoComponent{
    vegetales: String [] = [];
    Variable1:DataService;
    constructor(private dataService: DataService, httpService: HttpService){}
  
  mostrarBaseDatos () {
      this.vegetales = this.dataService.getVegetales();
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
    
    
  }  


  MensajePadre = "ajo";

  listadeProductos2 : any = data;
 

}
