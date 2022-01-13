import { Component, OnDestroy, OnInit, Output } from '@angular/core';
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
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'; // Observable para las notificaciones
import { Subject } from 'rxjs/Subject'; // generar los eventos para el observables
import { BarraSuperiorComponent } from 'app/barra-superior/barra-superior.component';
import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { FilterPipe } from 'app/pipes/filter.pipe';




@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
  })


export class CatalogoComponent implements OnDestroy, OnInit{
    vegetales: String [] = [];
    vegetales2:any;
    vegetalesFiltro: any []=[] ;
    Variable1:DataService;
    paginaCatalogo:string;
    cantProdCanasta: String;
    filtro= ''; // se inicializa el filtro
    habilitarFiltro : boolean = false;
    habilitarFiltro2 : boolean = true;





    @Output()myEvent = new EventEmitter();
    //ProductosCanasta: string;
    ngOnDestroy(): void {
    
    }

  //private canasta$ = new Subject<string>();
    

    //private ProductosCanasta$ = new Subject<ProductosCanasta>();
    

  constructor(private dataService: DataService,
              httpService: HttpService,
              private router: Router,
              ){}
  //private barraSuperior:BarraSuperiorComponent
 // private notificacion$ = new Subject <cantProdCanasta>()
 

  ngOnInit(): void{
    localStorage.setItem(  "activo" , this.paginaCatalogo)
    this.vegetalesFiltro=this.dataService.getVegetales(); //inicializar esta variable para la busqueda
    console.log('el array para el filtro es: ')
    console.log (this.listaArray2);
    this.habilitarFiltro = true;
 if (this.filtro!='')
 {
   console.log('filtro ya no es vacio')
 }   
    
    
  }
  
  mostrarBaseDatos () {
      this.vegetales = this.dataService.getVegetales();
      console.log("la base de datos es: " + this.vegetales);
  }

  listadeProductos = this.dataService.getVegetales();
   listaArray : any[]=Array.of(this.listadeProductos);
   listaArray2 = this.listaArray[0]; //se toma la posición 0 ya que al pasar el json a array, en la posición 0 es donde se desglosa el resto de datos
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
      localStorage.setItem('ProductosApartdosPosicion'+String(posicionInt),posicionProducto);
      let f = parseInt(localStorage.getItem('productosenCanasta'));
      
      
      if (localStorage.getItem(enCanasta)==='true'){ //si es verdadero se sumara al actual unidades apartadas
        var a = parseInt(localStorage.getItem(unidadesApart))+parseInt(unidadesApartadas);
        localStorage.setItem(unidadesApart,String(a)); //
        console.log ('las unidades apartadas para este producto son: ' + localStorage.getItem(unidadesApart));
        console.log('dentro del if');
    }
    
      else {
          f=f+1;
          localStorage.setItem('productosenCanasta', String(f));
          console.log('productos variados: '+ String(f)); 
           localStorage.setItem(enCanasta,'true'); //se registra que ya está en canasta
           console.log("entro al else"); //de lo contrario se iniciaran las variables en la posicion correspondiente
           localStorage.setItem(unidadesApart,unidadesApartadas);//se inicializar esta variable
           this.dataService.cambioCanasta(); //invoco el servicio para que genere el evento de cambio en el valor de productos diferentes en canasta
          }

     
      console.log("los productos apartados son: ");
      for (let i=0; i<=20; i++){
          let nombreTemporal : string = "ProductosApartadosNombre"+ String(i)
          console.log (localStorage.getItem(nombreTemporal));
            }

           // this.router.navigateByUrl('/app-barra-superior', {skipLocationChange: true}).then(()=>
           // this.router.navigate(["app-catalogo"]));
           //this.ngOnInit();
           //this.canasta$.next(localStorage.getItem('productosenCanasta'));//notifico el subject para el observable
          //this.dataService.actualizarBarra();
          this.myEvent.emit(null);
      }//corchete del try
      catch(e){console.log ("el error es: "+ e);}
     
  }

  
/*
  ComprarProducto(nombreProducto, numerodeProductos, unidadesDisponibles)
  {
      console.log ('el producto a modificar es: '+ nombreProducto);
      console.log ('la cantidad de artículos a agregar es: '+ numerodeProductos);
      console.log ('las unidades disponibles actuales son: '+ unidadesDisponibles);
      const db = getDatabase();
      const newKey = push(child(ref(db),nombreProducto)).key;
      //this.vegetales2 = this.dataService.postVegetales(nombreProducto); // para agregar productos nuevos
   
     this.dataService.agregarProductoA(10, numerodeProductos); //actualizar productos
  }
*/
  //MensajePadre = "ajo";

 // listadeProductos2 : any = data;
  //console.log('los productos en canasta son:' +VariablesGlobales.productoenCanasta); 
    

}