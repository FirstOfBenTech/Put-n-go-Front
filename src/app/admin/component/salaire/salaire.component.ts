import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComptabiliteService } from '../../service/comptabilite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent implements OnInit{

 constructor(private router:Router,private apiComp:ComptabiliteService,private formbuilder:FormBuilder,private toastr:ToastrService){}
 employeForm:FormGroup|any;
 ngOnInit(): void {
  // this.getAllEmploye();
    this.employeForm=this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required],
      salary:[0,Validators.required],
    })
}
 navigatePrevious(){
  this.router.navigate(['/comptabilite'])
 }
 addCategorie(data:any){
  this.apiComp.addEmploye(data).subscribe(res=>{
    this.employeForm.reset();
    this.toastr.success('Categorie Ajouté avec success !');
    // this.getAllEmploye();
  },

  (error)=>{
    this.toastr.error('Erreur lors de l ajout');
    console.error('Une erreur s est produit');
  });
}
getAllEmployee(){}

}
