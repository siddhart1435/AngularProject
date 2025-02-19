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
  tickets !: TicketDto[];
  ngOnInit(){
    this._ticketService.getAllTickets().subscribe((data)=>{
      this.tickets = data;
      if(localStorage.getItem("role"))
      {
        this.role=this._authService.getRole();
        console.log(this.role);
      }
    })

  }
  

}
