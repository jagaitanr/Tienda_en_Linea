import { Component } from '@angular/core';

import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import {PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
import { InfoPaginaService } from './info-pagina.service';
//import listadodeVegetales from '../assets/database/databasevegetales.json';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mercado !';

 // constructor(public infoPagina:InfopaginaService)
}
