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

  private canasta$ = new Subject<void>(); //variable subject para el observable actualizar componente barra superior
  private pagPrincipal$ = new Subject<void>(); //variable subject para el observable actualizar pagina principal en el carrito de compras
  private vegetales: any[]=[] ;
  constructor( private httpService : HttpService,
               private http: HttpService//,
               //private barra: BarraSuperiorComponent
               ) { }


  //getCanasta$=this.canasta$.asObservable();

  /*actualizarBarra(){
    this.canasta.next();  //actualiza la barra superior para el componente catalogo
    }
*/
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
       console.log(':');
       //console.log(this.vegetales);
    return this.vegetales;

  }


  postVegetales(nombreProducto) {this.httpService.sendDatos({nombreProducto})
  .subscribe((data: Response)=> console.log(data))
  }

  getCanasta$(){ //funcion que se ejecuta cuando el compomente que se suscribe  al observable es llamado
    return this.canasta$; //función llamada en la suscripción en ngOnInit barra superior
    //console.log('entro a getCanasta$') 
   }

   getPagPrincipal$(){
     return this.pagPrincipal$;// función llamada en la suscripción en NgOnInit pagPrincipal
   }

   actualizarPagPrincipal():Observable<any>{ //método que actuliza la pag Principal para retornar del carrito de compras
     this.pagPrincipal$.next();
     return this.pagPrincipal$;
   }

   cambioCanasta():Observable<any> {//método donde cambia el valor de los productos que están en la canasta y debe ser observado
    this.canasta$.next();
    //console.log('entro a cambio canasta')
    return this.canasta$;

   }



}
