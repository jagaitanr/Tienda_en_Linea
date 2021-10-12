import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';



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

}
