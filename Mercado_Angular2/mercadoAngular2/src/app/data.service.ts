import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import {getDatabase, ref, child, get} from "firebase/database";
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { Component } from '@angular/core';




@Injectable()
export class DataService {

  private canasta = new Subject<any>();
  private vegetales: any[]=[] ;
  constructor( private httpService : HttpService,
               private http: HttpService//,
               //private barra: BarraSuperiorComponent
               ) { }
  
               
  getCanasta$=this.canasta.asObservable();

  actualizarBarra(){
    this.canasta.next();  //actualiza la barra superior para el componente catalogo
    }

  getVegetales(){
    this.httpService.getDatos()
    .subscribe(  //callback que se ejecuta una vez reciba datos
      //(data: Response) => console.log(data),
       (data: Response)=>
       {let aux : any[]=[];
         for(let key in data){
                           aux.push(data[key]);
                           this.vegetales[key]=aux[key];
                          }
        //console.log('los vegetales son:' + JSON.stringify(aux));
         /*var temp= JSON.stringify(aux);
         //console.log('temp: '+temp);
         var temp2 = JSON.parse(temp);
         console.log('temp2' + temp2);*/
         //this.vegetales = aux;    
        }
       )
       console.log('los vegetales son:' + JSON.stringify(this.vegetales));
    return this.vegetales;
    
  }


  postVegetales(nombreProducto){this.httpService.sendDatos({nombreProducto})
  .subscribe((data: Response)=> console.log(data))
  }

  

  //agregarProductoA(posicionA, unidadesA){this.httpService.agregarProducto(posicionA, unidadesA)}

  
  
  getUnProducto(nombre: string){
    const urlProdOne = 'https://bigfood-4ef10-default-rtdb.firebaseio.com/${nombre}/.json';
    //return this.http.get(urlProdOne);
  
  }

    

  /*cambioCanasta() {//método donde cambia el valor y debe ser observado
  this.canasta.next();  
  }*/
}

