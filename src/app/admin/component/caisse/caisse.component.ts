import { Component, OnInit } from '@angular/core';
import { ComptabiliteService } from '../../service/comptabilite.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { caisse } from '../../model/caissemodel';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class CaisseComponent implements OnInit{

  caisseData:any;
  caisseForm:FormGroup|any;
  total:number =0;

  ngOnInit(): void {
    this.getCaisse();
    this.caisseForm=this.formBuilder.group({
      date:["",Validators.required],
      libelleEntree:["",Validators.required],
      montantEntree:["",Validators.required],
      libelleSortie:["",Validators.required],
      montantSortie:["",Validators.required]
    });

  }
  constructor(private apiCompt:ComptabiliteService,private toastr:ToastrService,private formBuilder:FormBuilder){}

  addCaisse(data:caisse){
    this.apiCompt.addCaisse(data).subscribe(res=>{
      this.toastr.success('Ajout effectué avec success !');
      this.caisseForm.reset();
      this.getCaisse();
    })
  }
  getCaisse(){
    this.apiCompt.getCaisse().subscribe(res=>{
      this.caisseData=res;
      this.calculTotal();
    });
  }
  calculTotal(){
    this.total=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+(totalCaisse.montantEntree-totalCaisse.montantSortie);
    },0);

  }

}
