import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/interfaces/offer.interface';
import { AthletesService } from 'src/app/services/athletes.service';

@Component({
  selector: 'app-listado-ofertas',
  templateUrl: './listado-ofertas.component.html',
  styleUrls: ['./listado-ofertas.component.css']
})
export class ListadoOfertasComponent implements OnInit {

  offers: Offer[] | undefined;

  constructor(
    private athletesService: AthletesService,
    private router: Router) { }

  async ngOnInit() {
    this.offers = await this.athletesService.offers();
    console.log(this.offers);
  }

  async onAccept(idOffer: any) {
    const result = await this.athletesService.acceptOffer(idOffer);
    console.log(result);
    if(result.affectedRows) {
      this.router.navigate(['/offers']);
    }
  }

  async onReject(idOffer: any) {
    const result = await this.athletesService.rejectOffer(idOffer);
    console.log(result);
    if(result.affectedRows) {
      this.router.navigate(['/offers']);
    }
  }

}
