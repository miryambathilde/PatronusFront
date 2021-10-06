import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-tokens-register',
  templateUrl: './tokens-register.component.html',
  styleUrls: ['./tokens-register.component.css']
})
export class TokensRegisterComponent implements OnInit {

  registerTokens: FormGroup;

  constructor(
    private usersService: UsersServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.registerTokens = new FormGroup(
        {
          tokens: new FormControl('', []),
          limitdate: new FormControl('', []),
          condiciones: new FormControl('', [Validators.required])
        }
      )
    }

  ngOnInit(): void {
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (
      this.registerTokens.get(controlName)?.hasError(errorName)
    ) {
      return true;
    } else {
      return false;
    }
  }


  async onSubmit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = params.idDeportista;
      const result = await this.usersService.initTokens(this.registerTokens.value, id);
      console.log(result);
      this.router.navigate(['/login']);
    })
  }

}
