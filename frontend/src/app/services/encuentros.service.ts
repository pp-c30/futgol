import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { iencuentros } from "../models/encuentros";

@Injectable({
  providedIn: 'root'
})
export class EncuentrosService {

  constructor(private http:HttpClient) {

  }

  getEncuentros()
  {
    return this.http.get<iencuentros[]>('http://localhost:3030/encuentros');
  }

  saveencuentros(unEncuentro:iencuentros){
    return this.http.post('http://localhost:3030/encuentros',unEncuentro);
    
  }

  updateencuentros(unEncuentro:iencuentros)
  {
    let id:number = unEncuentro.id_encuentro_partidos;
    return this.http.put('http://localhost:3030/encuentros/'+id,unEncuentro);
  }

  deleteencuentros(id:number)
  {
    return this.http.delete('http://localhost:3030/encuentros/'+id);
  }

}
