
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './componets/pagos/pagos.component';
import { SocioComponent } from "./components/socio/socio.component";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule} from "@angular/forms";

import { Ng2SearchPipeModule } from "ng2-search-filter";

import { NgxPaginationModule } from "ngx-pagination";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorariosComponent } from './components/horarios/horarios.component';
import { encuentroscomponent } from './components/encuentros/encuentros.component';
import { EncuentrosService } from './services/encuentros.service';





@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    SocioComponent,
    HorariosComponent,
    encuentroscomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
