import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IGaleria } from "../models/galeria";

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http:HttpClient) {

   }
   getGaleria()
   {
    return this.http.get<IGaleria[]>('http://localhost:3030/galeria');
   }

   saveGaleria(unGaleria:IGaleria){

    return this.http.post('http://localhost:3030/galeria',unGaleria);
    
   }

   updateGaleria(unGaleria:IGaleria)
   {
      let id:number = unGaleria.id_galeria;
     return this.http.put('http://localhost:3030/galeria/'+id,unGaleria);

   }

   deleteGaleria(id:number){
     return this.http.delete('http://localhost:3030/galeria/'+id);

   }
}



