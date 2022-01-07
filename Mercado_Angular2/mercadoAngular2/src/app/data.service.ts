import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import {getDatabase, ref, child, get} from "firebase/database";
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators'



@Injectable()
export class DataService {

  private canasta$ = new Subject<void>(); //variable subject para el observable
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


  postVegetales(nombreProducto) {this.httpService.sendDatos({nombreProducto})
  .subscribe((data: Response)=> console.log(data))
  }

  getCanasta$(){ //funcion que se ejecuta cuando el compomente que se suscribe  al observable es llamado
    return this.canasta$;
    //console.log('entro a getCanasta$')
   }

   cambioCanasta():Observable<any> {//método donde cambia el valor y debe ser observado
    this.canasta$.next();
    //console.log('entro a cambio canasta')
    return this.canasta$;
    
   }
   


}


