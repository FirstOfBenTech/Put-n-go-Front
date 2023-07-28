import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeApiService } from '../../service/commande-api.service';

@Component({
  selector: 'app-commande-termine',
  templateUrl: './commande-termine.component.html',
  styleUrls: ['./commande-termine.component.css']
})
export class CommandeTermineComponent implements OnInit{
  ngOnInit(): void {
      this.commandeValider();
  }
  constructor(private router:Router,private apiCommande:CommandeApiService){}
  commandeValide:any;

  selectOption:any;
  navigatePage(selectOption:string):void{
    if(selectOption==='EnCours'){
      this.router.navigate(['/commandeEnCours']);
    }
    else{
      this.router.navigate(['/commandeTermine']);
    }
  }
  commandeValider():void{
    this.apiCommande.getCommande().subscribe(commandes=>{
      this.commandeValide=commandes.filter(commande=>commande.valide===true);
      console.log(this.commandeValide);

    });
  }


}
