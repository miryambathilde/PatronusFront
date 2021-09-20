import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleSponsorGuard implements CanActivate {
  canActivate(): boolean{
    if(localStorage.getItem('role') === 'S') {
      return true;
    } else {
      return false;
    }
  }
}
