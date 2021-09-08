import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/productos.json';
import { UserService } from 'app/Services/user.service';
import { DetalleproductoComponent } from 'app/detalleproducto/detalleproducto.component';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { summaryFileName } from '@angular/compiler/src/aot/summary_serializer';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
  })


export class CatalogoComponent{
  constructor(){}
  ngOnInit() {
  }

 // arreglo:(string|number)[] = new Array(100)

  leerNombre(nombre){
    console.log("el producto es: " + nombre);
    VariablesGlobales.detalle_producto=nombre;
    VariablesGlobales.pagina_actual = "PagDetalleProducto";
  
 
  }

  AgregandoProductos(NumerodeProductos, nombreProducto){
    var yaEstaProducto = false;   
    for (let i=0; i<=VariablesGlobales.productosCanasta; i++){  //recorre el arreglo para revisar si ya esta en la canasta el producto si es así simplemente suma la cantidad a añadir
        if (VariablesGlobales.productosAñadidosNombre[i]===nombreProducto){
            
          VariablesGlobales.productosAñadidosCantidad[i] = Number(VariablesGlobales.productosAñadidosCantidad[i]) + Number(NumerodeProductos);
          
            console.log("dentro del if "+ i);
           i=VariablesGlobales.productosCanasta+1;//para sacarlo de for ya que encontró el mismo producto y no es necesario revisar más
            yaEstaProducto=true; // si encuentra un producto igual
          }
      if (yaEstaProducto) {
          //VariablesGlobales.productosAñadidosNombre[VariablesGlobales.productosCanasta]=nombreProducto;
          VariablesGlobales.productosAñadidosCantidad[i]=Number(VariablesGlobales.productosAñadidosCantidad)+Number(NumerodeProductos); //agrega la cantidad de productos solamente
          console.log("dentro de ya esta producto "+ i);
          }
    }
      if (!yaEstaProducto){
        VariablesGlobales.productosAñadidosNombre[VariablesGlobales.productosCanasta]= nombreProducto;
        VariablesGlobales.productosAñadidosCantidad[VariablesGlobales.productosCanasta]= NumerodeProductos;
        VariablesGlobales.productosCanasta=VariablesGlobales.productosCanasta+1
  }
        console.log (VariablesGlobales.productosAñadidosNombre); 
        console.log (VariablesGlobales.productosAñadidosCantidad); 
        console.log (VariablesGlobales.productosCanasta);
    
    
  }  


  MensajePadre = "ajo";

  listadeProductos : any = data;
  

}
