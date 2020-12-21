import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ICategoria_socio } from "../models/categoria_socio";


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) {

  }

  getcategoria()
  {
    return this.http.get<ICategoria_socio[]>('http://localhost:3030/categoria/');
  }

  savecategoria(unCategoria:ICategoria_socio){
    return this.http.post('http://localhost:3030/categoria/',unCategoria);
    
  }

  updatecategoria(unCategoria:ICategoria_socio)
  {
    let id:number = unCategoria.id_categoria_socio;
    return this.http.put('http://localhost:3030/categoria/'+id,unCategoria);
  }

  deletecategoria(id:number)
  {
    return this.http.delete('http://localhost:3030/categoria/'+id);
  }

}

