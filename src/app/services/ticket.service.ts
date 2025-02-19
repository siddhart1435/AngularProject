import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketDto } from '../models/ticketDto';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _httpClient : HttpClient) { }

  getAllTickets() : Observable<TicketDto[]>{
    return this._httpClient.get<TicketDto[]>("http://localhost:5123/api/Ticket");
  }

  getTicketDetails(ticketId : number) : Observable<TicketDto>{
    return this._httpClient.get<TicketDto>("http://localhost:5123/api/Ticket/GetTicketDetails/" + ticketId);
  }

  addTicket(ticket : Ticket) : Observable<Ticket>{    
    return this._httpClient.post<Ticket>("http://localhost:5123/api/Ticket",ticket);
  }

}
