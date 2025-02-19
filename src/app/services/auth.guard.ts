import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  activate : boolean = false;
  constructor(private _authService : AuthService, private _router : Router) { }
  
  canActivate(): boolean{
      
      this._authService.isLoggedIn.subscribe((status)=>{
        this.activate = status;
        
      })
      
    if(this.activate)
    {
      return true;
    }
    else
    {
      this._router.navigate(['/login']);      
      return false;
    }
  }
}
