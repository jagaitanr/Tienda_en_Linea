import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  


  public producto:string=''; //declaramos esta variable para ser usada de detalleproducto y catalogo
 
  mostrarProducto(nombre:string){ //con este método agregamos a la variable producto el nombre a mostrar
    this.producto = nombre;
    console.log ("user service el producto es: " + this.producto);
     return this.producto;
  }

  getUnProducto(){
    return this.producto;
  }

 /*
  constructor() { }

public (checkUserUusuario:string) {
  //simulate http.get()
  //return of ({ isUserAvailable: usuario!== 'prueba'});
}
*/
}
