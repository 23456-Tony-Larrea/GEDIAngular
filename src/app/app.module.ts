import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServicioService } from "./servicio.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { ElaboradorComponent } from './elaborador/elaborador.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { OficiosComponent } from './oficios/oficios.component'

@NgModule({
  declarations: [
    AppComponent,
    VisualizadorComponent,
    ElaboradorComponent,
    SolicitudComponent,
    OficiosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
