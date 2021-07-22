// app.routing.ts
import {RouterModule} from  '@angular/router';
import {AppComponent} from './app.component';
import {PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';


const appRoutes = [
    {path:'pagina-principal', component: PaginaPrincipalComponent, pathMatch: 'full'},
     {path:'inicio-sesion', component: InicioSesionComponent,  pathMatch: 'full'},
     {path:'barra-superior', component: BarraSuperiorComponent,  pathMatch: 'full'}
];

export const routing = RouterModule.forRoot (appRoutes);