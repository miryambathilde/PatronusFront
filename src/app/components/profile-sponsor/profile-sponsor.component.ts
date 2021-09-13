import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from "src/app/services/users-services.service";

@Component({
  selector: 'app-profile-sponsor',
  templateUrl: './profile-sponsor.component.html',
  styleUrls: ['./profile-sponsor.component.css']
})
export class ProfileSponsorComponent implements OnInit {

  constructor(private usersServices: UsersServicesService) { }

  ngOnInit(): void {
  }

}
