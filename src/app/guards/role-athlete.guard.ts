import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleAthleteGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): boolean{
    if(localStorage.getItem('role') === 'A') {
      return true;
    } else {
      Swal.fire({
        title: 'No tienes permisos para acceder a este recurso',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home']);        } 
      })
      return false;
    }
  }
}
