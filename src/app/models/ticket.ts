import { Comment } from './comment';
export interface Ticket{
    ticketId : number,
    userId : number,        
    title : string,
    description : string,
    statusId : number,        
    createdAt : Date,
    updateAt : Date
    
}