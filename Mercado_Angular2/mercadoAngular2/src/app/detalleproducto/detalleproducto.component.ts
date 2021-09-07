import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../assets/productos.json';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
import { UserService } from 'app/Services/user.service';
import { VariablesGlobales } from 'app/common/Variables-globales';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  name : string;
  articulo = VariablesGlobales.detalle_producto;
  ngOnInit(){
    console.log("el mensaje es: "+ this.articulo);
  }
constructor (){
  this.name = this.articulo;
  console.log ("dentro del constructor: " + this.name)
}
listadeProductos : any = data;
retornarPagina(){
  VariablesGlobales.pagina_actual='catalogo';
  console.log("estoy en retornar pagina: "+ VariablesGlobales.pagina_actual);
  }

}
