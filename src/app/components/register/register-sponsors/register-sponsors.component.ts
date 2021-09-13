import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-register-sponsors',
  templateUrl: './register-sponsors.component.html',
  styleUrls: ['./register-sponsors.component.css']
})
export class RegisterSponsorsComponent implements OnInit {
  registerSponsor: FormGroup;
  constructor(
    private usersServices: UsersServicesService,
    private router: Router
  ) {
    this.registerSponsor = new FormGroup({
      empresa: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      condiciones: new FormControl('', [])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const mensaje = this.usersServices.register(this.registerSponsor.value);
    if (mensaje !== '') {
      this.router.navigate(['/login']);
    }
  }
}
