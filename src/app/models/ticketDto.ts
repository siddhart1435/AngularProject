import { Comment } from "./comment"
export interface TicketDto{
    
    ticketId : number,
    userId : number,
    userName : string,
    title : string,
    description : string,
    statusId : number,
    statusName : string,
    createdAt : Date,
    comments : Comment[]
}