import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleAthleteGuard implements CanActivate {
  canActivate(): boolean{
    if(localStorage.getItem('role') === 'A') {
      return true;
    } else {
      return false;
    }
  }
}
