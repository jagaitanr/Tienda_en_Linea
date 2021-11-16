import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {getDatabase, ref, child, get} from "firebase/database";



@Injectable()
export class HttpService {

  constructor(private http : Http) {}
   

getDatos(){
  return this.http.get('https://bigfood-4ef10-default-rtdb.firebaseio.com/.json')
  .map((response: Response)=> response.json())
  }

  sendDatos(vegetales: any){
    const datos = JSON .stringify(vegetales);
    return this.http.post('https://bigfood-4ef10-default-rtdb.firebaseio.com/.json', datos)
    .map((response: Response) => response.json())
  }

  agregarProductoA(indice, imagenProducto, nombreProducto, precioProducto, unidadesDisponibles, unidadesSeparadas){
    console.log('se va a actualizar '+ indice + ' ,' + unidadesSeparadas);
  
    unidadesDisponibles=unidadesDisponibles-unidadesSeparadas;  //se resta el valor de unidades disponibles por las escogidas por el cliente
   // return this.http.put('https://bigfood-4ef10-default-rtdb.firebaseio.com/10', JSON.stringify({ unidadesDisponibles: unidades })).map((response: Response) => response.json())
   /*try{
   this.http.put('https://bigfood-4ef10-default-rtdb.firebaseio.com/10.json', JSON.stringify({ unidadesDisponibles: unidades }))}
   catch(e) {console.log(e);}
    */
try {
   return this.http.put('https://bigfood-4ef10-default-rtdb.firebaseio.com/'+indice+'.json', JSON.stringify({ imagen: imagenProducto, nombre: nombreProducto, precio: precioProducto, unidadesDisponibles: unidadesDisponibles })).subscribe((res:Response) => {
    console.log(res);
    return res;
    })
}
catch (e){console.log ("el error es> "+ e)}
  }
}
