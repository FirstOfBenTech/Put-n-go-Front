import { Component, OnInit } from '@angular/core';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mesboutiques } from '../../model/mesboutiquesmodel';

@Component({
  selector: 'app-mesboutiques',
  templateUrl: './mesboutiques.component.html',
  styleUrls: ['./mesboutiques.component.css']
})
export class MesboutiquesComponent implements OnInit{

  mesBoutiquesForm:FormGroup|any;
  mesBoutiquesData:mesboutiques|any;

  constructor(private apiMesBoutiques:MesBoutiquesApiService,private toastr:ToastrService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.getAllBoutiques();
    this.mesBoutiquesForm=this.formBuilder.group({
      libelle:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  addBoutiques(data:any){
    this.apiMesBoutiques.addBoutique(data).subscribe(res=>{
      this.toastr.success('Boutique ajouté avec succes!');
      this.mesBoutiquesForm.reset();
      // this.getAllBoutiques();
    },

    (error)=>{
      console.error('Une erreur est survenue');
      this.toastr.error('Une erreur est survenue');
    })
  }

  getAllBoutiques(){
    this.apiMesBoutiques.getAllBouriqte().subscribe(res=>{
      this.mesBoutiquesData=res;
    })
  }

}
