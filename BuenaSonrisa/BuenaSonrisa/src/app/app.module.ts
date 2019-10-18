import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,OnInit} from '@angular/core';
import * as M from'../assets/materialize/js/materialize.min.js';


import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';
import { LogearseComponent } from './Componentes/logearse/logearse.component';
import { CarouselComponent } from './Componentes/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RegistrarComponent,
    LogearseComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
