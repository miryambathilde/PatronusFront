import { Component, OnInit } from '@angular/core';
import { Deportista } from "src/app/interfaces/deportista.interface";
import { DeportistasService } from "src/app/services/deportistas.service";

@Component({
  selector: 'app-catalogo-deportistas',
  templateUrl: './catalogo-deportistas.component.html',
  styleUrls: ['./catalogo-deportistas.component.css']
})
export class CatalogoDeportistasComponent implements OnInit {

  deportistas: Deportista[] | undefined;

  constructor(private deportistasService: DeportistasService) {}

  ngOnInit(): void {
    this.deportistas = this.deportistasService.getAll();
  }

  //EVENTO DEL OUTPUT //
  onFiltroPais($event: any) {
    console.log($event);
  }
  onFiltroDeporte($event: any) {
    console.log($event);
  }
  onFiltroInvertible($event: any) {
    console.log($event);
  }

}
