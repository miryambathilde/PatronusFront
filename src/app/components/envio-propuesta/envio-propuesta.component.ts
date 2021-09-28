import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deportista } from 'src/app/interfaces/deportista.interface';
import { Sponsor } from 'src/app/interfaces/sponsor.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envio-propuesta',
  templateUrl: './envio-propuesta.component.html',
  styleUrls: ['./envio-propuesta.component.css']
})
export class EnvioPropuestaComponent implements OnInit {


  sponsor: Sponsor | undefined;
  athlete: any;
  sponsorName: any;

  constructor(
    private sponsorsService: SponsorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  async ngOnInit() {
    this.sponsor = await this.sponsorsService.getSponsor();
    this.sponsorName = this.sponsor?.company;
    // this.activatedRoute.params.subscribe(async params => {
    //   const fk_athletes = Number(params.idDeportista);
    //   this.athlete = this.sponsorsService.getAthleteById(fk_athletes);
    // })
  }

  async onSubmit(pForm: any) {
    this.activatedRoute.params.subscribe(async params => {
      const fk_athletes = Number(params.idDeportista);
      const quantitydemand = Number(params.quantitydemand);
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      const createdate = hoy.toISOString().substring(0, 10);
      const pFormItems = {
        company: pForm.value.company,
        participations: Number(pForm.value.participations),
        fk_athletes: fk_athletes, 
        createdate: createdate
      }
      console.log('esto es participations', pFormItems.participations);
      if(quantitydemand >= pFormItems.participations) {
        const result = await this.sponsorsService.newOffer(pFormItems);
        console.log(result);
        setTimeout(() => {
          this.router.navigate(['/offers-made']);
        }, 1200);
      } else {
        Swal.fire({
          title: 'La cantidad introducida supera los tokens disponibles',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/deportista/', fk_athletes]);        
          } 
        })
      }
    });
  }


  confirmOffer() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Oferta enviada!',
      showConfirmButton: false,
      timer: 1500
    });
  }


};
