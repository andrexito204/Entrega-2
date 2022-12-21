import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbComponent } from './components/navb/navb.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbComponent,
    InicioComponent,
    ClientesComponent,
    ProveedoresComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:InicioComponent},
      {path: 'Clientes', component:ClientesComponent},
      {path: 'Proveedores', component:ProveedoresComponent},
      {path: '**', redirectTo:'/', pathMatch:'full'},
    ]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
