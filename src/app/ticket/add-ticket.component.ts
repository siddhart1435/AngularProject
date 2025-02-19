import { Comment } from './../models/comment';
import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent {
  constructor(private _ticketService : TicketService, private _router : Router, private _authService : AuthService){}
  userId : number = 0;
  ticket : Ticket = {ticketId : 0, userId:0,description:"",statusId:0,title:""
    ,  createdAt:new Date, updateAt : new Date};
  
  ngOnInit(){

  }
  Add()
  {
    //alert(this.ticket.title);
    //this.userId = Number(localStorage.getItem("userId"));
    console.log(this.ticket);
    if(localStorage.getItem("userId"))
      {
        this.userId=this._authService.getUserId();
        //console.log(this.role);
      }
    this.ticket.userId = this.userId;

    console.log(this.ticket.userId);
    this._ticketService.addTicket(this.ticket).subscribe(()=>{
      alert("Record Saved");
      this._router.navigate(['ticket']);

    })
  }
}
