import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ipago } from "../models/pago";

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http:HttpClient) { 

  }

  getpagos(id_socio:number)
  {
   return this.http.get<Ipago[]>('http://localhost:3030/pagos/'+id_socio);
  }


  savePago(unPago:Ipago)
  {
    unPago.fecha_pago = unPago.fecha_pago.year+'-'+unPago.fecha_pago.month+'-'+unPago.fecha_pago.day;
   return this.http.post('http://localhost:3030/pagos',unPago);
  }

  updatePago(unPago:Ipago)
  {
    let id:number = unPago.id_pagos;
    return this.http.put('http://localhost:3030/pagos/'+id,unPago);
  }

  deletePago(id:number)
  {
    return this.http.delete('http://localhost:3030/pagos/'+id);
  }


}
