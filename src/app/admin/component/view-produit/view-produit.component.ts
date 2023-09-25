import { Component, OnInit } from '@angular/core';
import { ProduitApiService } from '../../service/produit-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-produit',
  templateUrl: './view-produit.component.html',
  styleUrls: ['./view-produit.component.css']
})
export class ViewProduitComponent implements OnInit{
  produitData:any;
  idRoute:string|any;

  ngOnInit(): void {
    this.idRoute = this.activeRoute.snapshot.paramMap.get('id');
    if (this.idRoute) {
      // Appel de l'API avec this.idRoute
      this.apiProduit.getProduct(this.idRoute).subscribe(response => {
        this.produitData = response;
        console.log(this.produitData);
        console.log('Bien recu');

      });
    } else {
      console.error("L'identifiant (this.idRoute) est vide ou non défini.");
      console.log('Erreur');

    }

  }
  constructor(private apiProduit:ProduitApiService,private activeRoute:ActivatedRoute){}
}
