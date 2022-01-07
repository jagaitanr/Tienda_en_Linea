import { Component, OnInit, Input, Output } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
import { DataService } from 'app/data.service';


@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],

})

export class BarraSuperiorComponent implements OnInit {

  @Input () productosenCanasta2 :string;
  suscription: Subscription;
  //canasta$: Observable<string>;
  constructor(private router: Router, private dataService: DataService) {

  }
  cantProdCanasta=parseInt(localStorage.getItem('productosenCanasta'));


     ngOnInit() {

      this.cantProdCanasta=parseInt(localStorage.getItem('productosenCanasta'));
      this.suscription = this.dataService.getCanasta$().subscribe(()=>{
      //console.log('recarga de barra superior')
      this.cantProdCanasta=parseInt(localStorage.getItem('productosenCanasta'));
          })
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

  //productosenCanasta=localStorage.getItem('productosenCanasta');
  //productosenCanasta=this.productosenCanasta2;
  }
