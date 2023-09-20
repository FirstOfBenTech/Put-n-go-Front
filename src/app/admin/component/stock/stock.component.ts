import { Component, OnInit } from '@angular/core';
import { ProduitApiService } from '../../service/produit-api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  ngOnInit(): void {
    this.getAllProduct();
  }
   constructor(private apiProduit:ProduitApiService){}
  Categorie:any;
  countCategorie:any;

  getAllProduct(){
    this.apiProduit.getAllProduit().subscribe(res=>{
      this.Categorie=res;
    });
    // this.countCategorie=this.Categorie.length;
    console.log(this.Categorie);

  }
}
