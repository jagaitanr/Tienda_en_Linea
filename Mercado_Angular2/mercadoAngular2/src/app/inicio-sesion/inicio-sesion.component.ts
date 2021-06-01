import { Component, OnInit } from '@angular/core';
//import {InicioSesionComponent} from './inicio-sesion.component'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  titulo = 'esta es mi página de inicio de sesion';

  constructor() { }

  ngOnInit() {
  }

}
