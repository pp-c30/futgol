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
    return this.http.get<iencuentros[]>('http://localhost:3020/encuentros');
  }

  saveencuentros(unEncuentro:iencuentros){
    return this.http.post('http://localhost:3020/encuentros',unEncuentro)
    
  }

}
