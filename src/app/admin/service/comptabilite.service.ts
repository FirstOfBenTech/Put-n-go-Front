import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { caisse } from '../model/caissemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptabiliteService {

  private apiUrl="http://localhost:3000/caisse";

  constructor(private http:HttpClient) { }

  addCaisse(data:caisse){
    return this.http.post<caisse>(this.apiUrl,data);
  }
  getCaisse():Observable<caisse[]>{
    return this.http.get<caisse[]>(this.apiUrl);
  }
}
