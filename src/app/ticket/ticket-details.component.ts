import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { TicketDto } from '../models/ticketDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {

  constructor(private _ticketService : TicketService, private route : ActivatedRoute){}
  ticket : TicketDto = {ticketId : 0, userId:0,description:"",statusId:0,title:""
    , userName:"", statusName:"", createdAt:new Date, comments : []};
  tktId : number = 0;
  status !: string; 
  ngOnInit(){
this.route.params.subscribe(param => {
 // alert(param['ticketId']);
  this.tktId = param['ticketId'];
})

//alert(this.ticketId);
    this._ticketService.getTicketDetails(this.tktId).subscribe((data)=>{
      this.ticket = data;
      this.status = this.ticket.statusName;
      console.log(this.ticket);
    })
  }

}
