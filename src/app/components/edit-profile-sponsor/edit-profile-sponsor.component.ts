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

  constructor( private sponsorsService: SponsorsService ) { }

  async ngOnInit() {
    this.sponsor = await this.sponsorsService.getSponsor();
  }

  async onSubmit(pForm: any) {
    const result = await this.sponsorsService.editSponsor(pForm.value);
    console.log(result);
  }

}
