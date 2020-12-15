
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
<<<<<<< HEAD
import { CategoriaSocioComponent } from './components/categoria-socio/categoria-socio.component';
=======
import { AdmiImagenComponent } from './component/admi-imagen/admi-imagen.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
<<<<<<< HEAD
import { AdmiDetalleImagenComponent } from './components/admi-detalle-imagen/admi-detalle-imagen.component';

=======
import { AdminImagenComponent } from './componentss/admin-imagen/admin-imagen.component';
import { AdminDetalleImagenComponent } from './componentss/admin-detalle-imagen/admin-detalle-imagen.component';
>>>>>>> 1f32ece2bb4b0f168d1475842f7c0014960604cb
>>>>>>> 4bb93ce0ff9364b58ba9158080e5c7f92b9a0c9d




@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    SocioComponent,
    HorariosComponent,
    EncuentrosComponent,
    GaleriaComponent,
    AsistenciaComponent,
<<<<<<< HEAD
    CategoriaSocioComponent
=======
    AdmiImagenComponent,
    NavegacionComponent,
<<<<<<< HEAD
    AdmiDetalleImagenComponent
=======
    AdminImagenComponent,
    AdminDetalleImagenComponent
>>>>>>> 1f32ece2bb4b0f168d1475842f7c0014960604cb
>>>>>>> 4bb93ce0ff9364b58ba9158080e5c7f92b9a0c9d
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
