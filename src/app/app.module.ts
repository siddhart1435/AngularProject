import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routes } from "./app.routes";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { TicketComponent } from "./ticket/ticket.component";
import { TicketDetailsComponent } from "./ticket/ticket-details.component";
import { AddTicketComponent } from "./ticket/add-ticket.component";
import { AddCommentComponent } from "./ticket/add-comment.component";

@NgModule({
    declarations:[MainComponent,HomeComponent, LoginComponent, TicketComponent
        , TicketDetailsComponent, AddTicketComponent, AddCommentComponent],
    imports:[RouterModule, FormsModule, RouterModule.forRoot(routes), BrowserModule
        , HttpClientModule, ReactiveFormsModule],
    providers:[],
    bootstrap:[MainComponent]

})

export class AppModule{}