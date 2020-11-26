import { Component, OnInit } from '@angular/core';

import { EncuentrosService } from "../../services/encuentros.service";

import {FormBuilder, FormGroup } from "@angular/forms";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { iencuentros } from 'src/app/models/encuentros';

@Component({
  selector:'app.encuentros',
  templateUrl: './encuentros.component.html',
  styleUrls: ['encuentros.component.css']
})
export class encuentroscomponent implements OnInit {

  listencuentros =[];

  formEncuentros: FormGroup;

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

  if(this.formEncuentros.value.id_encuentro_partidos )
  {

  }else{

  }

 
}


editarencuentro(encuentros:iencuentros)
{
  this.formEncuentros.setValue(encuentros);{}

  
}

}