import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from '../../model/categoriemodel';
import { BoutiqueApiService } from '../../service/boutique-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit{

  ngOnInit(): void {
    this.getAllCategorie();
      this.categorieForm=this.formbuilder.group({
        libelle:['',Validators.required],
        description:['',Validators.required]
      })
  }

  categorieData:any;
  categorieForm:FormGroup|any;
  constructor(private router:Router,private formbuilder:FormBuilder,private apiBoutique:BoutiqueApiService,private toastr:ToastrService){}

  NavigateElement(){
    this.router.navigate(["/itemBoutique"]);
  }

   addCategorie(data:categorie){
      this.apiBoutique.addCategorie(data).subscribe(res=>{
        this.categorieForm.reset();
        this.toastr.success('Categorie Ajouté avec success !');
      })
  }
  getAllCategorie(){
    this.apiBoutique.getAllCategorie().subscribe(res=>{
      this.categorieData=res;
    })
  }

}
