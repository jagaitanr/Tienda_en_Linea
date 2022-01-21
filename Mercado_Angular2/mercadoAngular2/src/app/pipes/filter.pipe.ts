import { Pipe, PipeTransform } from '@angular/core';
import { CatalogoComponent } from 'app/pagina-principal/pagina-principal.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/*
  transform(value: any, arg: any): any {
    const resultPosts = [];
    console.log('entro al pipefilter' + arg +'<');
    for(const post of value){
      console.log(post.nombre);
      if(post.nombre.indexOf(arg) > -1 ){
         resultPosts.push(post);
         console.log(resultPosts);
      };
      if (arg=='')
      {console.log('vacio');}
    };
    return resultPosts;
  }*/


  transform(value: any, arg: any): any {
    const resultPosts = [];
    console.log('entro al pipefilter' + arg +'<');
    for(const post of value){
      console.log(post.nombre);
      if(post.nombre.indexOf(arg) > -1 ){
         resultPosts.push(post);
         console.log(resultPosts);
      };

    };
    localStorage.setItem('habilitarFiltro','true');
    return resultPosts;
  }

}


