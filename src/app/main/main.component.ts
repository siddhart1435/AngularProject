import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private _authService : AuthService, private cd : ChangeDetectorRef, private _router : Router){}
  status : boolean = false;
  username !: string;
  ngOnInit(){
    this._authService.isLoggedIn.subscribe((status)=>{
      this.status = status;
      console.log(this.status);
      //this.cd.detectChanges();
      if(localStorage.getItem("userName"))
      {
        this.username = localStorage.getItem("userName") ?? '';
      }
      else
      {
        this._router.navigate(['/home']);
      }

    })
  }

  logout()
  {
    this.status = false;
      this._authService.logout();
      this._router.navigate(['/login']);
      
  }
}
