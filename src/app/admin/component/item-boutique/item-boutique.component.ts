import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  selectedFile:File|null=null;

  constructor(private route:Router,private formBuilder:FormBuilder,private apiProduit:ProduitApiService,private toastr:ToastrService){}
  ngOnInit(): void {

    this.getAllProduit();
    this.produitForm=this.formBuilder.group({
      libelle:['',Validators.required],
      quantite:['',Validators.required],
      prix:['',Validators.required],
      taille:['',Validators.required]
    })
  }
  navigatePrevious(){
    this.route.navigate(['/boutique']);
  }

  addProduit(data:produit){
    console.log(data);
     this.apiProduit.addProduit(data).subscribe(res=>{
      this.toastr.success('Produit ajouté avec success !');
      this.produitForm.reset();
      this.getAllProduit();
     })
  }

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
  }

  getAllProduit(){
    this.apiProduit.getAllProduit().subscribe(res=>{
      this.produitData=res;
      console.log(this.produitData);
    })
  }

}
