import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/interfaces/sponsor.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-edit-profile-sponsor',
  templateUrl: './edit-profile-sponsor.component.html',
  styleUrls: ['./edit-profile-sponsor.component.css']
})
export class EditProfileSponsorComponent implements OnInit {

  sponsor: Sponsor | undefined;
  files: any;

  constructor( private sponsorsService: SponsorsService ) { }

  async ngOnInit() {
    this.sponsor = await this.sponsorsService.getSponsor();
  }

  recogerImagen($event: any) {
    this.files = $event.target.files
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    formulario.append('logo', this.files[0]);
    formulario.append('company', pForm.value.company);
    formulario.append('email', pForm.value.email);
    const result = await this.sponsorsService.editSponsor(formulario);
    console.log(result);
  }

  async onDelete() {
    const result = await this.sponsorsService.deleteAccount();
    console.log(result);
  }

}
