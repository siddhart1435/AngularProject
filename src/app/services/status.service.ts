import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private _httpClient : HttpClient) { }
  getStatus(): Observable<Status[]>{
    return this._httpClient.get<Status[]>("http://localhost:5123/api/Status");
  }

}
