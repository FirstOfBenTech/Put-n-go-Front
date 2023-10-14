import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeApiService } from '../../service/commande-api.service';

@Component({
  selector: 'app-commande-livre',
  templateUrl: './commande-livre.component.html',
  styleUrls: ['./commande-livre.component.css']
})
export class CommandeLivreComponent implements OnInit{
 ngOnInit(): void {
  this.livrerCommande();
 }

  constructor(private router:Router,private apiCommande:CommandeApiService){}
  commandeLivre:any;

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

  livrerCommande():void{
    this.apiCommande.getAllCommande().subscribe(commandes=>{
      this.commandeLivre=commandes.filter(commande=>commande.livre===true);
    });
  }

}
