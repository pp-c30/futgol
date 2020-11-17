import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './componets/pagos/pagos.component';

import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms"

import { Ng2SearchPipeModule, Ng2SearchPipe } from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
