import { Component, OnInit } from '@angular/core';
import { IGaleria } from 'src/app/models/galeria';
import { GaleriaService } from "../../services/galeria.service";

import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  listGaleria = [];
  formGaleria: FormGroup;
  p:number = 1;
  buscarGaleria:any;

  constructor(private galeriaServ:GaleriaService,private fb: FormBuilder) {

    this.formGaleria = this.fb.group({

      id_galeria:[''],
      titulo_imagen:[''],
      imagen_url:[''],
      categoria:[''],
      estado:[''],

    });
   }

  ngOnInit(): void {
  }

  listaGaleria(){

    this.galeriaServ.getGaleria().subscribe(
      resultado => this.listGaleria = resultado,
      error => console.log(error)
      
    )

  }


  guardarGaleria(){

    if(this.formGaleria.value.id_galeria)
    {
          //se actualiza

       this.galeriaServ.updateGaleria(this.formGaleria.value).subscribe(
         respuesta => {
           console.log(respuesta);
           this.listaGaleria();
           this.formGaleria.reset();
         },
         error => console.log(error)
       )
    }else {
      this.galeriaServ.saveGaleria(this.formGaleria.value).subscribe(
        resultado => {
          console.log(resultado);
          //se refresca la grilla
          this.listaGaleria();
          this.formGaleria.reset();
        },
        error => console.log(error)
        
      );

    }



   

  }

  editarGaleria(galeria:IGaleria)
    {
    this.formGaleria.setValue(galeria);
    }

   eliminarGaleria(id:number)
   {
     if(confirm('Esta seguro que desea eliminar una foto?')){

      this.galeriaServ.deleteGaleria(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.listaGaleria();
 
        },
        error => console.log(error)
      );
     }
     
   } 
  





}




