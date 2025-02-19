import { TicketDto } from '../models/ticketDto';
import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  constructor(private _ticketService : TicketService, private _authService : AuthService){}
  role : string = "";
  userId : number = 0;
  tickets !: TicketDto[];
  ngOnInit(){

    if(localStorage.getItem("userId"))
      {
        this.userId=this._authService.getUserId();
        //console.log(this.role);
      }
    

    if(localStorage.getItem("role"))
      {
        this.role=this._authService.getRole();
        console.log(this.role);
      }
      if(this.role == "2")
      {
        this._ticketService.getAllTickets().subscribe((data)=>{
          this.tickets = data;          
        })
      }
      else
      {
        this._ticketService.getAllTicketsByUserId(this.userId).subscribe((data)=>{
          this.tickets = data;          
        })
      }
    

  }
  

}
