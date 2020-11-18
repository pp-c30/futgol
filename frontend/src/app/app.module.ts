import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './componets/pagos/pagos.component';

import { HttpClientModule } from "@angular/common/http";

<<<<<<< HEAD
import { ReactiveFormsModule } from "@angular/forms";
import { SocioComponent } from './components/socio/socio.component';
=======
import { ReactiveFormsModule, FormsModule} from "@angular/forms"

import { Ng2SearchPipeModule } from "ng2-search-filter";

import { NgxPaginationModule } from "ngx-pagination";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



>>>>>>> da419cd959f3abd951808c2ea096614d74ec526c

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
<<<<<<< HEAD
    SocioComponent
=======
   
>>>>>>> da419cd959f3abd951808c2ea096614d74ec526c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
