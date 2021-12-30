import { Component, OnInit, Input, Output } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
import { DataService } from 'app/data.service';


@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],
  
})

export class BarraSuperiorComponent implements OnInit {

  @Input () productosenCanasta2 :string;
  //canasta$: Observable<string>;
  constructor(private router: Router, private dataService: DataService) { }

     ngOnInit() {//productosenCanasta=localStorage.getItem('productosenCanasta');
      //this.canasta$=this.dataService.getCanasta$();
      //this.canasta$.subscribe(productosenCanasta=>this.productosenCanasta2=this.productosenCanasta2);
      //localStorage.setItem('productosenCanasta', this.productosenCanasta2);
      }
      

   catalogo(){
    localStorage.setItem("VariablesGlobales.pagina_actual", "catalogo");
    console.log('la pagina actual es> '+VariablesGlobales.pagina_actual);
    this.router.navigate(['/catalogo'])
    
  }
  carrito(){
    localStorage.setItem("VariablesGlobales.pagina_actual", "carrito");
  console.log('la pagina actual es> '+VariablesGlobales.pagina_actual);
    this.router.navigate(['/carrito'])
  }
  inicio(){
    localStorage.setItem("VariablesGlobales.pagina_actual", "inicio");
    console.log('la pagina actual es> '+VariablesGlobales.pagina_actual);
    this.router.navigate(['/inicio-sesion'])
  }
  
  productosenCanasta=localStorage.getItem('productosenCanasta');
  //productosenCanasta=this.productosenCanasta2;
  cantProdCanasta=parseInt(localStorage.getItem('productosenCanasta'));
}
