import { routing } from  './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';



@NgModule({
  declarations: [
//<<<<<<< HEAD
    //AppComponent, PaginaPrincipalComponent, InicioSesionComponent
//=======
    AppComponent,
    PaginaPrincipalComponent,
    InicioSesionComponent
//>>>>>>> 209fd19d004c7a8ab899fb84a9e70e5857edab37
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
