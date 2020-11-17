import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './componets/pagos/pagos.component';

import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule} from "@angular/forms"

import { Ng2SearchPipeModule } from "ng2-search-filter";

import { NgxPaginationModule } from "ngx-pagination";
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
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
