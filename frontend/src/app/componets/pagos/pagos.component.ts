import { Component, OnInit } from '@angular/core';

import { PagosService } from "../../services/pagos.service";

import { FormBuilder, FormGroup, Form, Validators} from "@angular/forms";
import { Ipago } from 'src/app/models/pago';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})

export class PagosComponent implements OnInit {

  listPagos = [];
  
  formPago: FormGroup;

  buscarPago:any;

  p:number = 1;

  id_socio:number;

  constructor(private pagosServ:PagosService, private fb:FormBuilder, private activate:ActivatedRoute) { 

    this.formPago = this.fb.group({
      id_pagos:[null],
      id_socio:['',[Validators.required,Validators.minLength(1)]],
      fecha_pago:['',[Validators.required]],
      cuota:['',[Validators.required]],
      periodo_mes:[0],
      periodo_anio:['',[Validators.required]],
     });
     this.activate.params.subscribe(
       params =>{
        this.id_socio = params.id_socio
       }
     );
  }

  ngOnInit(): void {
    this.obtenerPagos();
    this.formPago.get('id_socio').setValue(this.id_socio);
  } 

  obtenerPagos()
  {
    this.pagosServ.getpagos(this.id_socio).subscribe(
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
        this.formPago.reset();
        //se refresca la grilla 
        this.obtenerPagos();
        
       },
       error => console.log(error)
      );
      }

  }
  editarPago(pago:Ipago)
  {
    this.formPago.setValue(pago);
  }

  eliminarPago(id:number)
  {
    if(confirm('esta seguro que desea ejecutar esta accion')){
      this.pagosServ.deletePago(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerPagos();
        },
        error => console.log(error)
      );
      }
    }
}
