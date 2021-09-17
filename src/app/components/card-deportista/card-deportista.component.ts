import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Deportista } from "src/app/interfaces/deportista.interface";
import { DeportistasService } from "src/app/services/deportistas.service";

@Component({
  selector: 'app-card-deportista',
  templateUrl: './card-deportista.component.html',
  styleUrls: ['./card-deportista.component.css']
})
export class CardDeportistaComponent implements OnInit {

  miDeportista: Deportista | undefined;

  constructor(private deportistasService: DeportistasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.idDeportista);
      this.miDeportista = this.deportistasService.getById(id);
      //console.log(params.idDeportista);
    })
  }

}
