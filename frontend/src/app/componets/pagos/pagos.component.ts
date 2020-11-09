import { Component, OnInit } from '@angular/core';

import { PagosService } from "../../services/pagos.service";

import { FormBuilder, FormGroup } from "@angular/forms";
import { Ipago } from 'src/app/models/pago';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})

export class PagosComponent implements OnInit {

  listPagos = [];
  
  formPago: FormGroup;

  constructor(private pagosServ:PagosService, private fb:FormBuilder) { 

    this.formPago = this.fb.group({
      id_pagos:[null],
      id_socio:[''],
      fecha_pago:[''],
      cuota:[''],
      periodo_mes:[''],
      periodo_anio:['']

    });

  }

  ngOnInit(): void {
    this.obtenerPagos();
  } 

  obtenerPagos()
  {
    this.pagosServ.getpagos().subscribe(
      resultado => this.listPagos = resultado,
      error => console.log(error)
    )
  }

  guardarPago()
  {

      if(this.formPago.value.id_pagos)
      {
       //se actualiza 
       this.pagosServ.updatePago(this.formPago.value).subscribe(
         respuesta => {
           console.log(respuesta);
           this.obtenerPagos();
         },
         error => console.log(error)
       )

      }else{
         //console.log(this.formPago.value);
    this.pagosServ.savePago(this.formPago.value).subscribe(
      resultado =>{
        console.log(resultado);
        //se refresca la grilla 
        this.obtenerPagos();
        this.formPago.reset();
       },
       error => console.log(error)
      );
      }

  }
  editarPago(pago:Ipago)
  {
    this.formPago.setValue(pago);
  }
}
