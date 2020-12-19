import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Iimagen } from "../models/imagen";

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor( private http:HttpClient ) {

   }

   saveImagen(datosImagen:Iimagen,files:FileList)
   {
    const fd = new FormData();

    fd.append('id_galeria',String(datosImagen.id_galeria));

    fd.append('imagen_url',datosImagen.imagen_url);

    fd.append('public_id',datosImagen.public_id);

    fd.append('portada',datosImagen.portada);

    for (let index = 0; index < files.length; index++) {
      
      fd.append('img_imagen',files[index]);

    }

     return this.http.post('http://localhost:3030/galeria_imagenes',fd);
   
    }
    
    getImagen()
    {
      return this.http.get<Iimagen[]>('http://localhost:3030/galeria_imagenes');
    }

}
