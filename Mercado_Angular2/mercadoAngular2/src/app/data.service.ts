import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';


@Injectable()
export class DataService {

  private vegetales: any[]=[] ;
  constructor( private httpService : HttpService) { }

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

}
