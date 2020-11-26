import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagosComponent } from "./componets/pagos/pagos.component";
import { SocioComponent } from './components/socio/socio.component';



const routes: Routes = [
  {
    path:'pagos/:id_socio',
    component:PagosComponent
  },
  {

    path:'socios',
    component:SocioComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
