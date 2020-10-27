import { Component, OnInit } from '@angular/core';

import { PagosService } from "../../services/pagos.service";

import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})

export class PagosComponent implements OnInit {

  listPagos = [];
  
  formPago: FormGroup

  constructor(private pagosServ:PagosService, private fb:FormBuilder) { 

    this.formPago = this.fb.group({

      id_socio:[''],
      fecha_pago:[''],
      cuota:[''],
      periodo_mes:[''],
      periodo_anio:['']

    });

  }

  ngOnInit(): void {
    this.obtenerPagos
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
    //console.log(this.formPago.value);
    this.pagosServ.savePago(this.formPago.value).subscribe(
    resultado =>{
      console.log(resultado);
      //se refresca la grilla 
      this.obtenerPagos();
     }
    )
  }



}
