import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-tokens-register',
  templateUrl: './tokens-register.component.html',
  styleUrls: ['./tokens-register.component.css']
})
export class TokensRegisterComponent implements OnInit {

  constructor(private usersService: UsersServicesService) { }

  ngOnInit(): void {
  }


  async onSubmit(pForm: any) {
    const result = await this.usersService.initTokens(pForm.value);
    console.log(result);
  }

}
