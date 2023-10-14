import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeApiService } from '../../service/commande-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commande-termine',
  templateUrl: './commande-termine.component.html',
  styleUrls: ['./commande-termine.component.css']
})
export class CommandeTermineComponent implements OnInit{
  ngOnInit(): void {
      this.commandeValider();
  }
  constructor(private router:Router,private apiCommande:CommandeApiService,private toarst:ToastrService){}
  commandeValide:any;
  clientData:any[]=[];
  produitData:any[]=[];
  commandeData:any[]=[];
  nombreCommande:any;

  selectOption:any;
  navigatePage(selectOption:string):void{
    if(selectOption==='EnCours'){
      this.router.navigate(['/commandeEnCours']);
    }
    else if(selectOption==='Termine'){
      this.router.navigate(['/commandeTermine']);
    }
    else{
      this.router.navigate(['/commandeLivre']);
    }
  }
  commandeValider():void{
    this.apiCommande.getAllCommande().subscribe(commandes=>{
      this.commandeValide=commandes.filter(commande=>commande.valide==true && commande.livre==false);
    });
  }

  // getAllCommande(){
  //   this.apiCommande.getCommande().subscribe(commandes=>{
  //     this.commandeData=commandes.filter(commande=>commande.valide==false || commande.valide==null && commande.livre==false);
  //     this.nombreCommande=this.commandeData.length;
  //   })
  // }
  livrerCommande(commande:any):void{
    this.apiCommande.livreCommande(commande.id).subscribe(()=>{
      this.commandeValider();
      this.toarst.success('Commande Livré avec success !');
    })
  }

}
