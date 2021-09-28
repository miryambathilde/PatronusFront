import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthletesService } from 'src/app/services/athletes.service';
import { SponsorsService } from 'src/app/services/sponsors.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-email-pass',
  templateUrl: './email-pass.component.html',
  styleUrls: ['./email-pass.component.css']
})
export class EmailPassComponent implements OnInit {

  constructor(
    private sponsorsService: SponsorsService,
    private athletesService: AthletesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const role = localStorage.getItem('role');
    console.log(role);
    if (role === 'S') {
      const result = await this.sponsorsService.sendEmailPass(pForm.value);
      console.log(result);
    } else if (role === 'A') {
      const result = await this.athletesService.sendEmailPass(pForm.value);
      console.log(result);
    }
    Swal.fire({
      title: 'Por favor, revisa tu correo electrónico',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']);        
      } 
    })
  }


}
