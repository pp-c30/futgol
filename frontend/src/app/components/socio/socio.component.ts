import { Component, OnInit } from '@angular/core';

import { SocioService } from "../../services/socio.service";

import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  listSocio = [];
  formSocio: FormGroup;
  p:number = 1;

  constructor(private socioServ:SocioService,private fb: FormBuilder) { 

    this.formSocio = this.fb.group({

      id_socio:[null],
      nombre:[''],
      apellido:[''],
      dni:[null],
      celular_tutor:[''],
      domicilio:[''],
      categoria:[null],
      enfermedad:[''],
      detalle_enfermedad:[''],
      estado:[null],
      sexo:[null],
      fecha_alta:[''],
      fecha_nacimiento:[''],
      

    });


  }

  ngOnInit(): void {
  }

  listaSocio(){

    this.socioServ.getSocio().subscribe(
      resultado => this.listSocio = resultado,
      error => console.log(error)
      
    )

  }


  guardarSocio(){

    //console.log(this.formSocio.value);

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
