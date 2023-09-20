import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commande } from '../model/commandemodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeApiService {

  private apiUrl = environment.apiUrl;
  private apiUrl2="http://localhost:3000/commandes";

  constructor(private http:HttpClient) { }

  addCommande(data:commande){
    return this.http.post<any>(`${this.apiUrl}/order`,data);
  }

  getCommande():Observable<commande[]> {
    return this.http.get<commande[]>(this.apiUrl2);
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
