import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ISocio } from "../models/socio";

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http:HttpClient) {

   }
   getSocio()
   {
    return this.http.get<ISocio[]>('http://localhost:3030/socio');
   }

   saveSocio(unSocio:ISocio){

    return this.http.post('http://localhost:3030/socios',unSocio);
    
   }

   updateSocio(unSocio:ISocio)
   {
      let id:number = unSocio.id_socio;
     return this.http.put('http://localhost:3030/socios/'+id,unSocio);

   }

   deleteSocio(id:number){
     return this.http.delete('http://localhost:3030/socios/'+id);

   }
}
