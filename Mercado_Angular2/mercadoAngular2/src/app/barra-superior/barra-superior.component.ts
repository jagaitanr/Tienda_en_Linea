import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'app/common/Variables-globales';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

}
