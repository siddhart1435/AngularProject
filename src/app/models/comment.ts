import { Status } from './status';
export interface Comment{
    id : number,
    userId : number,
    userName : string,
    content : string,
    ticketId: number,
    statusId : number,
    createdAt : Date
    
}