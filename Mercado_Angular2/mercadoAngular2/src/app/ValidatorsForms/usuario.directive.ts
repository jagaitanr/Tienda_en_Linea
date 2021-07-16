/*import { Directive } from '@angular/core';

//import { UserService } from '../Services/user.service';
//import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
export const userAsyncValidator = 
  (userService: UserService, time: number = 500) => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => userService.checkUser(input.value)),
        map(res => {
          return res.isUserAvailable ? null : {userAvailable: false}
        })
      );
    };
  };
/*
@Directive({
  selector: '[appUsuario]'
})
export class UsuarioDirective {

  constructor() { }

}
*/