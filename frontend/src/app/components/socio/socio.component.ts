import { Component, OnInit } from '@angular/core';

import { SocioService } from "../../services/socio.service";

import { FormBuilder, FormGroup } from "@angular/forms";
import { ISocio } from 'src/app/models/socio';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  listSocio = [];
  formSocio: FormGroup;
  p:number = 1;
  buscarSocio:any;

  constructor(private socioServ:SocioService,private fb: FormBuilder) { 

    this.formSocio = this.fb.group({

      id_socio:[null],
      nombre:[''],
      apellido:[''],
      dni:[null],
      celular_tutor:[''],
      domicilio:[''],
      categoria:[null],
      enfermedad:[2],
      detalle_enfermedad:[''],
      estado:[null],
      sexo:[2],
      fecha_alta:[new Date()],
      fecha_nacimiento:[''],
      

    });


  }

  ngOnInit(): void {
    this.listaSocio();

  }

  listaSocio(){

    this.socioServ.getSocio().subscribe(
      resultado => this.listSocio = resultado,
      error => console.log(error)
      
    )

  }


  guardarSocio(){

    if(this.formSocio.value.id_socio)
    {
          //se actualiza

       this.socioServ.updateSocio(this.formSocio.value).subscribe(
         respuesta => {
           console.log(respuesta);
           this.listaSocio();
           this.formSocio.reset();
         },
         error => console.log(error)
       )
    }else {
      this.socioServ.saveSocio(this.formSocio.value).subscribe(
        resultado => {
          console.log(resultado);
          //se refresca la grilla
          this.listaSocio();
          this.formSocio.reset();
        },
        error => console.log(error)
        
      );

    }



   

  }

  editarSocio(socio:ISocio)
    {
      socio.fecha_nacimiento = {year:Number(socio.year),month:Number(socio.month),day:Number(socio.day)}
    this.formSocio.setValue(socio);
    }

   eliminarSocio(id:number)
   {
     if(confirm('Esta seguro que desea eliminar un socio?')){

      this.socioServ.deleteSocio(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.listaSocio();
 
        },
        error => console.log(error)
      );
     }
     
   } 
  





}
