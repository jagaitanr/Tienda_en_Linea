import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import {getDatabase, ref, child, get} from "firebase/database";
//import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class DataService {

  private vegetales: any[]=[] ;
  constructor( private httpService : HttpService, private http: HttpService) { }



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
  
  getUnProducto(nombre: string){
    const urlProdOne = 'https://bigfood-4ef10-default-rtdb.firebaseio.com/${nombre}/.json';
    //return this.http.get(urlProdOne);
  
  }
/*
  agregarProductoData(nombre, precio, imagen, unidades_disponibles){
    const db = getDatabase();
  
    const postData = {
      nombre_Actualizado : nombre,
      precio_Actualizado :  precio,
      imagen_Actualizada : imagen,
      unidades_Actualizada: unidades_disponibles
  
    };

    //const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
   
    return update (ref (db), updates);
  }
  */
}


