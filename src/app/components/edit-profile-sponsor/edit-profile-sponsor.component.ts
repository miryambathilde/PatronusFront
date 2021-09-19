import { Component, OnInit } from '@angular/core';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-edit-profile-sponsor',
  templateUrl: './edit-profile-sponsor.component.html',
  styleUrls: ['./edit-profile-sponsor.component.css']
})
export class EditProfileSponsorComponent implements OnInit {

  constructor( private sponsorsService: SponsorsService ) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.sponsorsService.editSponsor(pForm.value);
    console.log(result);
  }

}
