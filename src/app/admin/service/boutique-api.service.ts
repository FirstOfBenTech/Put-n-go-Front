import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categorie } from '../model/categoriemodel';
import { commande } from '../model/commandemodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueApiService {

  private apiUrl2="http://localhost:3000/categorie";
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  addCategorie(data:any){
    return this.http.post<any>(`${this.apiUrl}/shop`,data);
  }

  getAllCategorie():Observable<commande[]>{
    return this.http.get<commande[]>(this.apiUrl2);
  }
}
