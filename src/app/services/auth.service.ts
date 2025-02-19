import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of , map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private _httpClient : HttpClient) { }
  usr !: User; 

  login(email: string, password: string): Observable<User> {
    return this.checkLogin(email, password).pipe(
      map((data: User) => {
        this.usr = data;        
        if (this.usr != null) {
          if (this.usr.password === password) {
            console.log(password);
            console.log(this.usr);
            console.log(this.usr.userId);
            localStorage.setItem("userName", this.usr.email);
            localStorage.setItem("role", this.usr.roleId.toString());
            localStorage.setItem("userId", this.usr.userId.toString());
            this.isLoggedIn.next(true);            
            return this.usr;
          }  
          else
          {
            this.usr.userId = 0;
          }        
        }
        console.log("From subscribe If :" + this.usr);
        return this.usr;
      })
    );
  }

  checkLogin(email : string, password : string): Observable<User> {
    return this._httpClient.get<User>("http://localhost:5123/api/Login/" + email)
  }

  logout() : void {
   localStorage.removeItem("userName");
   localStorage.removeItem("role");
   localStorage.clear();
   this.isLoggedIn.next(false); 
  }

  getRole() : string{
    return localStorage.getItem("role") || "";
  }

  getUserId() : number {
    return Number(localStorage.getItem("userId")) || 0;
  }

  // isLoggedIn(): boolean{
  //   if(localStorage.getItem("userName")){
  //     this.isAuthenticationSubject.next(true);
  //     return true;
  //   }
  //   return false;

  // }
}
