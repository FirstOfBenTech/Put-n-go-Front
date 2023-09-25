import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitApiService } from '../../service/produit-api.service';
import { produit } from '../../model/produitmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-boutique',
  templateUrl: './item-boutique.component.html',
  styleUrls: ['./item-boutique.component.css']
})
export class ItemBoutiqueComponent implements OnInit{

  produitForm:FormGroup|any;
  produitData:produit|any;
  categoryData:any;
  selectedFile:File|null=null;
  category:any;

  constructor(private activedRoute:ActivatedRoute, private route:Router,private formBuilder:FormBuilder,private apiProduit:ProduitApiService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.category=this.activedRoute.snapshot.paramMap.get('category');
      this.apiProduit.getAllProduitCategorie(this.category).subscribe(products => {
        this.produitData = products;
        console.log(this.produitData);
      });

  }
  navigatePrevious(){
    this.route.navigate(['/boutique']);
  }




}
