import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketDetailsComponent } from './ticket/ticket-details.component';
import { AddTicketComponent } from './ticket/add-ticket.component';
import { AddCommentComponent } from './ticket/add-comment.component';

export const routes: Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'main', component : MainComponent},
    {path : 'login', component : LoginComponent},
    {path : 'ticket', component : TicketComponent, canActivate:[AuthGuardService]},
    {path : 'ticket-details/:ticketId', component : TicketDetailsComponent, canActivate:[AuthGuardService]},
    {path : 'add-ticket', component : AddTicketComponent, canActivate:[AuthGuardService]},
    {path : 'add-comment/:ticketId', component : AddCommentComponent, canActivate:[AuthGuardService]}
];
