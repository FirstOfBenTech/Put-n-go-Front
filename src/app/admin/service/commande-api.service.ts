import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commande } from '../model/commandemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeApiService {

  private apiUrl="http://localhost:3000/commande";

  constructor(private http:HttpClient) { }

  addCommande(data:commande){
    return this.http.post<commande>(this.apiUrl,data);
  }

  getCommande():Observable<commande[]> {
    return this.http.get<commande[]>(this.apiUrl);
  }
  validerCommande(commandeId:number):Observable<commande>{
    return this.http.patch<commande>(this.apiUrl+'/'+commandeId,{valide:true});
  }
}
