import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _authService : AuthService, private _router : Router, private http : HttpClient){}
  email : string = "";
  password : string = "";
  user !: User //=  { userid:0,email:"",roleId:0,name:"",password:"" }
  
  login()
  {    
    this._authService.login(this.email, this.password).subscribe((data=>{
      this.user = data;
      console.log(this.user);      
      if(this.user.userId != 0)
        {
          alert("Success");
          this._router.navigate(['/home']);
    
        }
        else
        {
          alert("Invalid");
        }
    }),(error)=>{
      console.error(error);
    })
  } 
}
