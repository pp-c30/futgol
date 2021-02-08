import { Component, OnInit } from '@angular/core';


import { CategoriaService } from "../../services/categoria-socio.service";

import {FormBuilder, FormGroup } from "@angular/forms";

import { ICategoria_socio } from 'src/app/models/categoria_socio';


@Component({
  selector: 'app-categoria-socio',
  templateUrl: './categoria-socio.component.html',
  styleUrls: ['./categoria-socio.component.css']
})
export class CategoriaSocioComponent implements OnInit {

  listcategoria =[];

  formCategoria: FormGroup;
  p:number = 1;
  buscarcategoria:any;

  constructor(private categoriaServ:CategoriaService,private fb: FormBuilder) { 

      this.formCategoria = this.fb.group({
        id_categoria_socio:[null],
        descripcion:['']

      })

  }

  ngOnInit(): void{
    this.obtenercategoria();
  }

  obtenercategoria()
{
  this.categoriaServ.getcategoria().subscribe(
    resultado => this.listcategoria = resultado,
    error => console.log(error),
  )
}

guardarcategoria()
{

  if(this.formCategoria.value.id_categoria_socio)
  {
    //si existe el id, se actualiza
    this.categoriaServ.updatecategoria(this.formCategoria.value).subscribe(
      respuesta => {
          console.log(respuesta);
          this.obtenercategoria();
          this.formCategoria.reset();
      },
      error => console.log(error)
    )
  }else{
    this.categoriaServ.savecategoria(this.formCategoria.value).subscribe(
      resultado => {
          console.log(resultado);

          this.obtenercategoria();
          this.formCategoria.reset();
      },
      error => console.log(error)
    );
  }

 
}


editarcategoria(categoria:ICategoria_socio)
{
  this.formCategoria.setValue(categoria);
}

eliminarcategoria(id:number)
{

  if(confirm('Estas seguro que deseas ejecutar esta accion?')){
    this.categoriaServ.deletecategoria(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenercategoria();
        alert(respuesta);
      },
      error => console.log(error)
    );
  }


}

}
