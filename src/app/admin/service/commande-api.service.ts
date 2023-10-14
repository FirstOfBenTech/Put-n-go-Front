import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commande } from '../model/commandemodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  addCommande(data:commande){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.apiUrl}/order`,data,{headers});
  }

  getAllCommande():Observable<commande[]> {
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<commande[]>(`${this.apiUrl}/order`,{headers});
  }
  getAllCategorie():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/category`,{headers});
  }
  getAllProduit():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/product`,{headers});
  }

  getAllBoutique():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/shop`,{headers});
  }
  validerCommande(commandeId:number):Observable<commande>{
    return this.http.patch<commande>(this.apiUrl+'/'+commandeId,{valide:true});
  }

  livreCommande(commandeId:number):Observable<commande>{
    return this.http.patch<commande>(this.apiUrl+'/'+commandeId,{livre:true});
  }

  deleteCommande(commandeId:any){
    return this.http.delete<commande>(this.apiUrl+'/'+commandeId);
  }

  fetchData(commandeId:any){
    return this.http.get<commande>(this.apiUrl+"/"+commandeId);
  }
  updateCommande(commande:commande,commandeId:any){
    return this.http.put<commande>(this.apiUrl+"/"+commandeId,commande);
  }
}
