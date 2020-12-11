import { Component, OnInit } from '@angular/core';

import { EncuentrosService } from "../../services/encuentros.service";

import {FormBuilder, FormGroup } from "@angular/forms";

import { iencuentros } from 'src/app/models/encuentros';

@Component({
  selector:'app.encuentros',
  templateUrl: './encuentros.component.html',
  styleUrls: ['encuentros.component.css']
})
export class EncuentrosComponent implements OnInit {

  listencuentros =[];

  formEncuentros: FormGroup;
  p:number = 1;
  buscarencuentros:any;

  constructor(private encuentroServ:EncuentrosService,private fb: FormBuilder) { 

      this.formEncuentros = this.fb.group({
        id_encuentro_partidos:[null],
        titulo:[''],
        descripcion:[''],
        fecha_hora:[''],
        ubicacion:[''],
        categoria:[''],
        estado:[''],


      })

  }

  ngOnInit(): void{
    this.obtenerencuentros();
  }

  obtenerencuentros()
{
  this.encuentroServ.getEncuentros().subscribe(
    resultado => this.listencuentros = resultado,
    error => console.log(error),
  )
}

guardarencuentros()
{

  if(this.formEncuentros.value.id_encuentro_partidos)
  {
    //si existe el id, se actualiza
    this.encuentroServ.updateencuentros(this.formEncuentros.value).subscribe(
      respuesta => {
          console.log(respuesta);
          this.obtenerencuentros();
          this.formEncuentros.reset();
      },
      error => console.log(error)
    )
  }else{
    this.encuentroServ.saveencuentros(this.formEncuentros.value).subscribe(
      resultado => {
          console.log(resultado);

          this.obtenerencuentros();
          this.formEncuentros.reset();
      },
      error => console.log(error)
    );
  }

 
}


editarencuentro(encuentros:iencuentros)
{
  this.formEncuentros.setValue(encuentros);
}

eliminarencuentro(id:number)
{

  if(confirm('Estas seguro que deseas ejecutar esta accion?')){
    this.encuentroServ.deleteencuentros(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerencuentros();
      },
      error => console.log(error)
    );
  }


}

}