import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Deportista } from "src/app/interfaces/deportista.interface";
import { AthletesService } from "src/app/services/athletes.service";
import { SponsorsService } from 'src/app/services/sponsors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-deportista',
  templateUrl: './card-deportista.component.html',
  styleUrls: ['./card-deportista.component.css']
})
export class CardDeportistaComponent implements OnInit {

  miDeportista: Deportista | undefined;

  constructor(
     private AthletesService: AthletesService,
     private sponsorsService: SponsorsService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      this.miDeportista = await this.sponsorsService.getAthleteById(id);
      console.log(this.miDeportista);
    })
  };

  addFavorite() {
    this.activatedRoute.params.subscribe(async params => { 
      const id = parseInt(params.idDeportista);
      const result = await this.sponsorsService.addAthleteFavorite(id);
      console.log(result);
      this.router.navigate(['/favorites']);
    })
  };


  confirmFavorite() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Añadido a tus favoritos!',
      showConfirmButton: false,
      timer: 1500
    });
  }



}
