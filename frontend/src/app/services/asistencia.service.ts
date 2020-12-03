import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IAsistencia } from "../models/asistencia";

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http:HttpClient) {

   }
   getAsistencia()
   {
    return this.http.get<IAsistencia[]>('http://localhost:3030/asistencia');
   }

   saveAsistencia(unAsistencia:IAsistencia){

    return this.http.post('http://localhost:3030/asistencia',unAsistencia);
    
   }

   updateAsistencia(unAsistencia:IAsistencia)
   {
      let id:number = unAsistencia.id_asistencia;
     return this.http.put('http://localhost:3030/asistencia/'+id,unAsistencia);

   }

   deleteAsistencia(id:number){
     return this.http.delete('http://localhost:3030/asistencia/'+id);

   }
}

