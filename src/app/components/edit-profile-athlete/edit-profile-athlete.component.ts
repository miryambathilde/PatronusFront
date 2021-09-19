import { Component, OnInit } from '@angular/core';
import { AthletesService } from 'src/app/services/athletes.service';

@Component({
  selector: 'app-edit-profile-athlete',
  templateUrl: './edit-profile-athlete.component.html',
  styleUrls: ['./edit-profile-athlete.component.css']
})
export class EditProfileAthleteComponent implements OnInit {

  constructor(private athletesService: AthletesService) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.athletesService.editAthlete(pForm.value);
    console.log(result);
  }

}
