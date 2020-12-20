import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ihorarios } from "../models/horarios";

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http:HttpClient) {

  }

  gethorarios()
  {
    return this.http.get<ihorarios[]>('http://localhost:3030/horario_entrenamiento');
  }

  savehorarios(unHorario:ihorarios){
    return this.http.post('http://localhost:3030/horario_entrenamiento',unHorario);
    
  }

  updatehorarios(unHorario:ihorarios)
  {
    let id:number = unHorario.id_horario_entrenamiento;
    return this.http.put('http://localhost:3030/horario_entrenamiento/'+id,unHorario);
  }

  deletehorarios(id:number)
  {
    return this.http.delete('http://localhost:3030/horario_entrenamiento/'+id);
  }

}
