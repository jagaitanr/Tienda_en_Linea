import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { routing } from 'app/app.routing';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  paginaElegida:string; //declaro esta variable local para usarla en el html de este componente
  constructor() {
  //  this.paginaElegida = VariablesGlobales.pagina_actual;
   }

  ngOnInit() {
    this.paginaElegida = VariablesGlobales.pagina_actual;
  
  }

}
