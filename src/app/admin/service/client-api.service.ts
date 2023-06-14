import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/clientmodel';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  private apiUrl="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  addClient(data:client){
    return this.http.post<client>(this.apiUrl,data);
  }

  getClient(){
    return this.http.get<client[]>(this.apiUrl);
  }
}
