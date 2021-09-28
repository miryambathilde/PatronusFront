import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): boolean{
    const token:any= localStorage.getItem('token');
    if(token)
    {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.expired_at < dayjs().unix()) {
        Swal.fire({
          title: 'La sesión ha caducado. Por favor, vuelve a iniciar sesión',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/home']);        } 
        })
        return false;
      } else {
        return true;
      }
    }else{
      Swal.fire({
        title: 'No estás logado. Por favor, inicia sesión',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home']);        } 
      })
      return false;
    }
  }
}
