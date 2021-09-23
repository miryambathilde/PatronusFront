import { Component, OnInit } from '@angular/core';
import { SponsorsService } from 'src/app/services/sponsors.service';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-email-pass',
  templateUrl: './email-pass.component.html',
  styleUrls: ['./email-pass.component.css']
})
export class EmailPassComponent implements OnInit {

  constructor(private sponsorsService: SponsorsService) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.sponsorsService.sendEmailPass(pForm.value);
    console.log(result);
  }

}
