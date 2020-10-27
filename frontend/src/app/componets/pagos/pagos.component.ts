import { Component, OnInit } from '@angular/core';
import { PagosService } from "../../services/pagos.service";

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  listPagos = [];

  constructor(private pagosServ:PagosService) { 
  }

  ngOnInit(): void {
    this.obtenerPagos
  } 

  obtenerPagos()
  {
    this.pagosServ.getpagos().subscribe(
      resultado => this.listPagos = resultado,
      error => console.log(error)
    )
  }

}
