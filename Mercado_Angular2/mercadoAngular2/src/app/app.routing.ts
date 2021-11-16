// app.routing.ts
import {RouterModule} from  '@angular/router';
import {AppComponent} from './app.component';
import {PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { NgModule } from '@angular/core';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { CarritoComponent } from './carrito/carrito.component';



const appRoutes = [
    {path:'pagina-principal', component: PaginaPrincipalComponent, pathMatch: 'full'},
     {path:'inicio-sesion', component: InicioSesionComponent,  pathMatch: 'full'},
     {path:'barra-superior', component: BarraSuperiorComponent,  pathMatch: 'full'},
     {path:'catalogo', component: CatalogoComponent,  pathMatch: 'full'},
     {path : 'detalle-producto', component: DetalleproductoComponent, pathMatch: 'full'},
     {path : 'carrito', component: CarritoComponent, pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio-sesion'}
    ];

export const routing = RouterModule.forRoot (appRoutes);
