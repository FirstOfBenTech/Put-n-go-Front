import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categorie } from '../model/categoriemodel';
import { commande } from '../model/commandemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueApiService {

  private apiUrl="http://localhost:3000/categorie";

  constructor(private http:HttpClient) { }

  addCategorie(data:categorie){
    return this.http.post<categorie>(this.apiUrl,data);
  }

  getAllCategorie():Observable<commande[]>{
    return this.http.get<commande[]>(this.apiUrl);
  }
}
