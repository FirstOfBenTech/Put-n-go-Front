import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/clientmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  private apiUrl="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  addClient(data:client){
    return this.http.post<client>(this.apiUrl,data);
  }

  getClient():Observable<client[]>{
    return this.http.get<client[]>(this.apiUrl);
  }

  deleteClient(id:number){
    return this.http.delete<client>(this.apiUrl+"/"+id);
  }

  fetchData(id:number){
    return this.http.get<client>(this.apiUrl+"/"+id);
  }

  updateClient(data:client,id:number){
    return this.http.put<client>(this.apiUrl+"/"+id,data);
  }
}
