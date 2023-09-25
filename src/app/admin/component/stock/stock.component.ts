import { Component, OnInit } from '@angular/core';
import { ProduitApiService } from '../../service/produit-api.service';
import { StockApiService } from '../../service/stock-api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  ngOnInit(): void {
    this.getAllBoutique();
    // this.getAllProduct();
  }
   constructor(private apiProduit:ProduitApiService,private apiStock:StockApiService){}
   Categorie:any;
  countCategorie:any;
  boutiqueData:any;
  clientData:any;

  // getAllProduct(){
  //   this.apiProduit.getAllProduit().subscribe(res=>{
  //     this.Categorie=res;
  //   });
    // this.countCategorie=this.Categorie.length;
    // console.log(this.Categorie);

  // }
  getAllBoutique(){
    this.apiStock.getAllBoutique().subscribe(res=>{
      this.boutiqueData=res;
      console.log(this.boutiqueData);

    })
  }
  getClient(){
    this.apiStock.getClient().subscribe(res=>{
      this.clientData=res;
      console.log(this.clientData);

    })
  }

}
