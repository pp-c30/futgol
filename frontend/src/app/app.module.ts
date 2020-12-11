
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
import { EncuentrosComponent } from './components/encuentros/encuentros.component';
import { EncuentrosService } from './services/encuentros.service';

import { GaleriaComponent } from './components/galeria/galeria.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AdmiImagenComponent } from './component/admi-imagen/admi-imagen.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AdminImagenComponent } from './componentss/admin-imagen/admin-imagen.component';
import { AdminDetalleImagenComponent } from './componentss/admin-detalle-imagen/admin-detalle-imagen.component';




@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    SocioComponent,
    HorariosComponent,
    EncuentrosComponent,
    GaleriaComponent,
    AsistenciaComponent,
    AdmiImagenComponent,
    NavegacionComponent,
    AdminImagenComponent,
    AdminDetalleImagenComponent
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
