import { Component, OnInit } from '@angular/core';
import { IAsistencia } from 'src/app/models/asistencia';
import { AsistenciaService } from "../../services/asistencia.service";

import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  listAsistencia = [];
  formAsistencia: FormGroup;
  p:number = 1;
  buscarAsistencia:any;

  constructor(private asistenciaServ:AsistenciaService,private fb: FormBuilder) {

    this.formAsistencia = this.fb.group({

    id_asistencia:[''],
    id_socio:[''],
    fecha_asistencia:[''],
    asistencia:[''],
    categoria:[''],

    });
   }

  ngOnInit(): void {

    this.listaAsistencia();
  }

  listaAsistencia(){

    this.asistenciaServ.getAsistencia().subscribe(
      resultado => this.listAsistencia = resultado,
      error => console.log(error)
      
    )

  }


  guardarAsistencia(){

    if(this.formAsistencia.value.id_asistencia)
    {
          //se actualiza

       this.asistenciaServ.updateAsistencia(this.formAsistencia.value).subscribe(
         respuesta => {
           console.log(respuesta);
           this.listaAsistencia();
           this.formAsistencia.reset();
         },
         error => console.log(error)
       )
    }else {
      this.asistenciaServ.saveAsistencia(this.formAsistencia.value).subscribe(
        resultado => {
          console.log(resultado);
          //se refresca la grilla
          this.listaAsistencia();
          this.formAsistencia.reset();
        },
        error => console.log(error)
        
      );

    }



   

  }

  editarAsistencia(asistencia:IAsistencia)
    {
    this.formAsistencia.setValue(asistencia);
    }

   eliminarAsistencia(id:number)
   {
     if(confirm('Esta seguro que desea eliminar una asistencia?')){

      this.asistenciaServ.deleteAsistencia(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.listaAsistencia();
 
        },
        error => console.log(error)
      );
     }
     
   } 
  





}

