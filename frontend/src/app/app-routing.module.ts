import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagosComponent } from "./componets/pagos/pagos.component";
import { SocioComponent } from './components/socio/socio.component';
import {EncuentrosComponent}  from  './components/encuentros/encuentros.component';



const routes: Routes = [
  {
    path:'pagos/:id_socio',
    component:PagosComponent
  },
  {

    path:'socios',
    component:SocioComponent
    
  },
  {
    path:'encuentros',
    component: EncuentrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
