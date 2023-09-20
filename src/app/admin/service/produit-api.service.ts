import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from '../model/produitmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitApiService {
  private apiUrl="http://localhost:3000/produits";

  constructor(private http:HttpClient) { }

    addProduit(data:produit){
      return this.http.post<produit>(this.apiUrl,data);
    }
    getAllProduit():Observable<produit[]>{
      return this.http.get<produit[]>(this.apiUrl);
    }
}
