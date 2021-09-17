import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(): boolean{
    if(localStorage.getItem('token'))
    {
      return true;
    }else{
      return false;
    }
  }

}
