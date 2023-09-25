import { Component, OnInit } from '@angular/core';
import { ProduitApiService } from '../../service/produit-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent  implements OnInit{
  idRoute:any;
  produitData:any;

  ngOnInit(): void {
    this.idRoute=this.activeRoute.snapshot.paramMap.get('_id');
    this.apiProduit.getProduct(this.idRoute).subscribe(response=>{
      this.produitData=response;
     })
  }
  constructor(private apiProduit:ProduitApiService,private activeRoute:ActivatedRoute,private toastr:ToastrService,private route:Router){}

  updateBoutique(){
    this.apiProduit.updateProduct(this.produitData,this.idRoute).subscribe(response=>{
      this.toastr.success("Boutique modifié avec success!");
      this.route.navigate(['/mesboutiques']);
    },

    (error)=>{
      this.toastr.error('Une erreur est survenue');
      console.error('Erreur lors de la modification');
     })
   }
}
