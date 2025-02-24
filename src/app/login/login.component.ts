import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _authService : AuthService, private _router : Router, private http : HttpClient){}
  // email : string = "";
  // password : string = "";
  useremail: any = '';
  pwd: any = '';
  user: User = {userId : 0, name: "", password:"",email:"",roleId:0 };
  submitted: boolean = false;
  isFormsubmitted:boolean=false;
  
  
  //user !: User //=  { userid:0,email:"",roleId:0,name:"",password:"" }
  
  login()
  {    
    this.useremail = this.email;
  this.pwd =this.password;
  this.user.email= this.useremail;
  this.user.password =this.pwd;

    this._authService.login(this.useremail, this.pwd).subscribe((data=>{
      this.user = data;
      console.log(this.user);      
      if(this.user.userId != 0)
        {          
          this._router.navigate(['/home']);
    
        }
        else
        {
          alert("Invalid username and password");
        }
    }),(error)=>{
      console.error(error);
      alert("Invalid username and password");
    })
  } 

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(18)])
    })
  
    // Getter Methods:
    get email() { return this.userForm.get('email')?.value; }
    get password() { return this.userForm.get('password')?.value; }
  
    onSubmit() {
      console.log(`Form Submitted: `, this.userForm.value);
      this.submitted = true;
    }
}
