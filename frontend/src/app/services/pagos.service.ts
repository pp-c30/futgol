import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ipago } from "../models/pago";

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http:HttpClient) { 

  }

  getpagos()
  {
   return this.http.get<Ipago[]>('http://localhost:3020/pagos');
  }


  savePago(unPago:Ipago)
  {
   return this.http.post('http://localhost:3020/pagos',unPago);
  }


}
