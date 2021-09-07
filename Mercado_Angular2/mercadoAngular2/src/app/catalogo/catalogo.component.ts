import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/productos.json';
import { UserService } from 'app/Services/user.service';
import { DetalleproductoComponent } from 'app/detalleproducto/detalleproducto.component';
import { VariablesGlobales } from 'app/common/Variables-globales';



@Component({
  selector: 'app-catalogo',
  //template: '<app-detalleproducto [childMessage]="MensajePadre"></app-detalleproducto>',
  templateUrl: './catalogo.component.html',
  /*template: `
    <app-child [childMessage]="parentMessage"></app-child>
  `,
  */styleUrls: ['./catalogo.component.css']
  // providers:[UserService]
})


//export class CatalogoComponent implements OnInit {
export class CatalogoComponent{
  //constructor(private UserService:UserService) { }
  constructor(){}
  ngOnInit() {
    

  }

  leerNombre(nombre){
    console.log("el producto es: " + nombre);
    VariablesGlobales.detalle_producto=nombre;
  
 
  }


  MensajePadre = "ajo";

  listadeProductos : any = data;
  

}
