import { routing } from  './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FiltrobuscarPipe } from './filtrobuscar.pipe';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    InicioSesionComponent,
    BarraSuperiorComponent,
    CatalogoComponent,
    FiltrobuscarPipe,
    DetalleproductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
