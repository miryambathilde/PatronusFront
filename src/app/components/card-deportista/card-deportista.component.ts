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
  athleteByToken: Deportista | undefined;
  athleteByResults: Deportista | undefined;
  athleteByCountry: Deportista | undefined;

  isFavorite: boolean = false;


  urlBack: string = 'http://localhost:3000/';

  constructor(
    private AthletesService: AthletesService,
    private sponsorsService: SponsorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      this.miDeportista = await this.sponsorsService.getAthleteById(id);
      console.log(this.miDeportista);
      this.athleteByToken = await this.sponsorsService.getRecomByToken(this.miDeportista?.quantitydemand, this.miDeportista?.id);
      console.log('Athlete by Token', this.athleteByToken);
      // this.athleteByResults = await this.sponsorsService.getRecomByResults();
      this.athleteByCountry = await this.sponsorsService.getAthleteByCountry(this.miDeportista?.country);
      console.log('Athlete by Country', this.athleteByCountry);
      const favorite = await this.sponsorsService.athleteIsFavorite(id);
      console.log('favorite', favorite[0])
      this.isFavorite = (favorite[0] !== undefined) ? true : false;
    });

  }


  addFavorite() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      const result = await this.sponsorsService.addAthleteFavorite(id);
      console.log(result);
      this.router.navigate(['/dashboard']);
    });
  }

  
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

