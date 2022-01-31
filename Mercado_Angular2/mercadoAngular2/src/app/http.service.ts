import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {getDatabase, ref, child, get} from "firebase/database";



@Injectable()
export class HttpService {

  constructor(private http : Http) { }

getDatos(){
  return this.http.get('https://bigfood-4ef10-default-rtdb.firebaseio.com/.json')
  .map((response: Response)=> response.json())
  }

  sendDatos(vegetales: any){
    const datos = JSON .stringify(vegetales);
    return this.http.post('https://bigfood-4ef10-default-rtdb.firebaseio.com/.json', datos)
    .map((response: Response) => response.json())
  }

  agregarProducto(e_posicion, a_imagen, b_nombre, c_precio, d_unidadesDisponibles){
    //console.log('se va a actualizar '+ posicion + ' ,' + unidades);

   // return this.http.put('https://bigfood-4ef10-default-rtdb.firebaseio.com/10', JSON.stringify({ unidadesDisponibles: unidades })).map((response: Response) => response.json())
   /*try{
   this.http.put('https://bigfood-4ef10-default-rtdb.firebaseio.com/10.json', JSON.stringify({ unidadesDisponibles: unidades }))}
   catch(e) {console.log(e);}
    */
   let database_firebase = 'https://bigfood-4ef10-default-rtdb.firebaseio.com/'+String(e_posicion)+'.json';
try {
   //return this.http.put(database_firebase, JSON.stringify({imagen:a_imagen, nombre: b_nombre, precio: c_precio, unidadesDisponibles: d_unidadesDisponibles  })).subscribe((res:Response) => {
    return this.http.put(database_firebase, JSON.stringify({imagen:a_imagen, nombre:b_nombre, posicion: e_posicion,precio: c_precio, unidadesDisponibles: d_unidadesDisponibles  })).subscribe((res:Response) => {
      console.log(res);
    return res;
    })
}
catch (e){console.log ("el error es> "+ e)}
  }

}
