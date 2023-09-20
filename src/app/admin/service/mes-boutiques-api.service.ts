import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mesboutiques } from '../model/mesboutiquesmodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MesBoutiquesApiService {
  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  addBoutique(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.apiUrl}/shop`,data,{headers});
  }

  getAllBouriqte():Observable<mesboutiques[]>{
    return this.http.get<mesboutiques[]>(this.apiUrl);
  }
}
