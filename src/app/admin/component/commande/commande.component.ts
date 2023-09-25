import { Component, OnInit } from '@angular/core';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit{

  categoryData:any;

  ngOnInit(): void {

  }
  constructor(private apiMesBoutique:MesBoutiquesApiService){}

  getCategory(){
    this.apiMesBoutique.getAllCategorie().subscribe(res=>{
      this.categoryData=res;
    })
  }
}
