
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './component/pagos/pagos.component';
import { SocioComponent } from "./components/socio/socio.component";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule} from "@angular/forms";

import { Ng2SearchPipeModule } from "ng2-search-filter";

import { NgxPaginationModule } from "ngx-pagination";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorariosComponent } from './components/horarios/horarios.component';
import { EncuentrosComponent } from './components/encuentros/encuentros.component';
import { EncuentrosService } from './services/encuentros.service';

import { GaleriaComponent } from './components/galeria/galeria.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

import { CategoriaSocioComponent } from './components/categoria-socio/categoria-socio.component';

import { AdmiImagenComponent } from './components/admi-imagen/admi-imagen.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

import { AdmiDetalleImagenComponent } from './components/admi-detalle-imagen/admi-detalle-imagen.component';

import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    SocioComponent,
    HorariosComponent,
    EncuentrosComponent,
    GaleriaComponent,
    AsistenciaComponent,
    CategoriaSocioComponent,
    AdmiImagenComponent,
    NavegacionComponent,
    AdmiDetalleImagenComponent
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
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
