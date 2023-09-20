import { Component, OnInit } from '@angular/core';
import { ComptabiliteService } from '../../service/comptabilite.service';

@Component({
  selector: 'app-generale',
  templateUrl: './generale.component.html',
  styleUrls: ['./generale.component.css']
})
export class GeneraleComponent implements OnInit{

  totalEntree:number=0;
  totalSortie:number=0;
   caisseData:any;
  ngOnInit(): void {
    this.getCaisse();

  }
  constructor(private apiCompt:ComptabiliteService){}

  getCaisse(){
    this.apiCompt.getCaisse().subscribe(res=>{
      this.caisseData=res;
      this.calculTotal();
    });
  }
  calculTotal(){
    this.totalEntree=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+totalCaisse.montantEntree;
    },0);

    this.totalSortie=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+totalCaisse.montantSortie;
    },0);

  }

}
