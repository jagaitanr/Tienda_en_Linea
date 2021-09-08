import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/productos.json';
import { UserService } from 'app/Services/user.service';
import { DetalleproductoComponent } from 'app/detalleproducto/detalleproducto.component';
import { VariablesGlobales } from 'app/common/Variables-globales';



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
          
    for (let i=0; i<=VariablesGlobales.productosCanasta; i++){  //recorre el arreglo para revisar si ya esta en la canasta el producto si es así simplemente suma la cantidad a añadir
        if (VariablesGlobales.productosAñadidosNombre[i]===nombreProducto){
            VariablesGlobales.productosAñadidosCantidad[i]=VariablesGlobales.productosAñadidosCantidad[i] + NumerodeProductos;
            console.log("dentro del if "+ i);
           VariablesGlobales.productosCanasta=VariablesGlobales.productosCanasta-1;
        }
    else {
          VariablesGlobales.productosAñadidosNombre[VariablesGlobales.productosCanasta]=nombreProducto;
          VariablesGlobales.productosAñadidosCantidad[VariablesGlobales.productosCanasta]=NumerodeProductos
          console.log("dentro del else "+ i);
          }
        console.log (VariablesGlobales.productosAñadidosNombre); 
        console.log (VariablesGlobales.productosAñadidosCantidad); 
        console.log (VariablesGlobales.productosCanasta);
    }
    VariablesGlobales.productosCanasta=VariablesGlobales.productosCanasta+1;
    
  }  


  MensajePadre = "ajo";

  listadeProductos : any = data;
  

}
