import { Component, OnInit } from '@angular/core';

import { ImagenService } from "../../services/imagen.service";
import { Iimagen } from 'src/app/models/imagen';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IHtmlInputeEvent } from "../../models/inputElement";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-admi-imagen',
  templateUrl: './admi-imagen.component.html',
  styleUrls: ['./admi-imagen.component.css']
})
export class AdmiImagenComponent implements OnInit {

  imagen:Iimagen[] = [];

  formImagen:FormGroup;

  archivos:FileList;

  imagenes_url = [];

  constructor(private spinner: NgxSpinnerService, private fb:FormBuilder,private serviceImagen:ImagenService) {
      this.formImagen = this.fb.group({
        id_galeria:['',[Validators.required]],
        url_imagen:['',[Validators.required]],
        public_id:['',[Validators.required]],
        portada:['',[Validators.required]],
        archivo:['']
      });
   }

  ngOnInit(): void {
    this.listaImagen();
  }

  listaImagen()
  {
    this.serviceImagen.getImagen().subscribe(
      resultado => {
        this.imagen = resultado;
      } 
    )
  }

  guardarImagen()
  {
    this.spinner.show();
    this.serviceImagen.saveImagen(this.formImagen.value,this.archivos).subscribe(
      resultado => {
        console.log(resultado);

        this.imagenes_url = [];
        this.formImagen.reset();
        this.listaImagen();
        this.spinner.hide();
      },
      error =>console.log(error)
    )
  }


  mostrarImagenSeleccionada(imagen:IHtmlInputeEvent)
  {

    this.imagenes_url = [];

    this.archivos = imagen.target.files;

    if(this.archivos)
    {
      for (let index = 0; index < this.archivos.length; index++) {
        
        const reader = new FileReader();
        //se hace la lectura de los archivos 
        reader.readAsDataURL(this.archivos[index]);
        //se guarda el resultado de la lectura de los archivos 
        reader.onload = () => {
          this.imagenes_url.push(reader.result)
        }
      }
    }
  }

}
