import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagosComponent } from "./componets/pagos/pagos.component";


const routes: Routes = [
  {
    path:'pagos/:id_socio',
    component:PagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
