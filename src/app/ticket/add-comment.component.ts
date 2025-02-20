import { Comment } from './../models/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Status } from '../models/status';
import { TicketService } from '../services/ticket.service';
import { TicketDto } from '../models/ticketDto';
import { AuthService } from '../services/auth.service';
import { CommentDto } from '../models/commentDto';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent {
  constructor(private _statusService : StatusService, private _route  : ActivatedRoute,
    private _ticketService : TicketService, private _authService : AuthService
  , private _router : Router){}
  status !: Status[];
  ticketId !: number;
  selectedOption !: number ;
  userId !: number;
  comment : CommentDto = {userId:0,ticketId:0,title:"",content:"",description:"", statusId:0 }

  ticket : TicketDto = {ticketId : 0, userId:0,description:"",statusId:0,title:""
      , userName:"", statusName:"", createdAt:new Date, comments : []};
    

  ngOnInit(){
    this._route.params.subscribe(param => {      
       this.ticketId = param['ticketId'];
     })
    this._statusService.getStatus().subscribe(data=>{
      this.status = data;
      console.log(this.status);
    })

    if(localStorage.getItem("userId"))
      {
        this.userId=this._authService.getUserId();
        //console.log(this.role);
      }
    

    this._ticketService.getTicketDetails(this.ticketId).subscribe((data)=>{
      this.ticket = data;
      
      this.selectedOption = this.ticket.statusId;
      console.log(this.selectedOption);
    })
  }

  Add(){
    this.comment.statusId = this.selectedOption;
    this.comment.userId = this.userId;
    this.comment.ticketId = this.ticketId;
    this._ticketService.addCommnet(this.comment).subscribe(()=>{
      alert("Record Saved");
      this._router.navigate(['ticket-details',  this.comment.ticketId]);
    })
  }

}
