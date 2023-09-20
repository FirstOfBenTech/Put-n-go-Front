import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {
  private apiUrl="http://localhost:3000/stock";

  constructor(private http:HttpClient) { }

  getAllProduct(){
  }
}
