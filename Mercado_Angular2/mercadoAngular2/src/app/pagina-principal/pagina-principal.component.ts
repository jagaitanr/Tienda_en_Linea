import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { routing } from 'app/app.routing';
import { DataService } from 'app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  paginaElegida:string; //declaro esta variable local para usarla en el html de este componente

  suscription: Subscription;
  constructor(private dataService : DataService) {
  //this.paginaElegida = VariablesGlobales.pagina_actual;
   }

   

  ngOnInit() {
  //this.paginaElegida = VariablesGlobales.pagina_actual;
  this.paginaElegida = localStorage.getItem("VariablesGlobales.pagina_actual");
  console.log('la pagina actual es:  '+ this.paginaElegida);
  this.suscription = this.dataService.getPagPrincipal$().subscribe(()=>{
    this.ngOnInit();
    console.log('en ngOninit de pag principal')
  })
    //console.log('recarga de barra superior')
    

  }
  

}

export class CatalogoComponent{};
