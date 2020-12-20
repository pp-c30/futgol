import { Component, OnInit } from '@angular/core';

import { HorariosService } from "../../services/horarios.service";

import {FormBuilder, FormGroup } from "@angular/forms";

import { ihorarios } from 'src/app/models/horarios';

@Component({
  selector:'app.horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['horarios.component.css']
})
export class HorariosComponent implements OnInit {

  listhorarios =[];

  formHorarios: FormGroup;
  p:number = 1;
  buscarhorarios:any;

  constructor(private horarioServ:HorariosService,private fb: FormBuilder) { 

      this.formHorarios = this.fb.group({
        id_horario_entrenamiento:[null],
        fecha_hora:[''],
        ubicacion:[''],
        direccion:[''],
        categoria:[''],


      })

  }

  ngOnInit(): void{
    this.obtenerhorarios();
  }

  obtenerhorarios()
{
  this.horarioServ.gethorarios().subscribe(
    resultado => this.listhorarios = resultado,
    error => console.log(error),
  )
}

guardarhorarios()
{

  if(this.formHorarios.value.id_horario_entrenamiento)
  {
    //si existe el id, se actualiza
    this.horarioServ.updatehorarios(this.formHorarios.value).subscribe(
      respuesta => {
          console.log(respuesta);
          this.obtenerhorarios();
          this.formHorarios.reset();
      },
      error => console.log(error)
    )
  }else{
    this.horarioServ.savehorarios(this.formHorarios.value).subscribe(
      resultado => {
          console.log(resultado);

          this.obtenerhorarios();
          this.formHorarios.reset();
      },
      error => console.log(error)
    );
  }

 
}


editarhorarios(horarios:ihorarios)
{
  this.formHorarios.setValue(horarios);
}

eliminarhorarios(id:number)
{

  if(confirm('Estas seguro que deseas ejecutar esta accion?')){
    this.horarioServ.deletehorarios(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerhorarios();
        alert(respuesta);
      },
      error => console.log(error)
    );
  }


}

}