import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../assets/productos.json';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
//import { AuthService } from '../../servicios/auth.service';
import { UserService } from 'app/Services/user.service';
import { ConstantesGlobales } from 'app/common/constantes-globales';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  //template: 'Message from parent',
  styleUrls: ['./detalleproducto.component.css']
  //providers :[UserService]
})
export class DetalleproductoComponent implements OnInit {

  articulo = ConstantesGlobales.detalle_producto;
//export class DetalleproductoComponent {
  
 //   @Input() nombre: 'ajo';
  ngOnInit(){
    console.log("el mensaje es: "+ this.articulo);
//private detalleProducto: any;
  
//constructor ( private UserService:UserService){}
  }
constructor (){}
}

/*

retomarNombre(){
  this.detalleProducto = this.UserService.getUnProducto;
  console.log("ya en detalle: "+ this.detalleProducto);
}
/*
  private detalleProducto: any;
  constructor(private servicio:AuthService,
    private route: ActivatedRoute) { 
    
  }
*//*
  ngOnInit() {  this.detalleProducto = this.UserService.getUnProducto;
    console.log("ya en detalle: "+ this.detalleProducto);
  
  }
  listadeProductos : any = data;
  
    
}
*/