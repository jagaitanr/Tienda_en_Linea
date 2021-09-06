import { Component } from '@angular/core';
//import {InicioSesionComponent} from './inicio-sesion.component';
//import {PaginaPrincipalComponent} from './pagina-principal.component';
import {PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import { UserService } from './Services/user.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'Mercado !';
}
