import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-termine',
  templateUrl: './commande-termine.component.html',
  styleUrls: ['./commande-termine.component.css']
})
export class CommandeTermineComponent {
  constructor(private router:Router){}

  selectOption:any;
  navigatePage(selectOption:string):void{
    if(selectOption==='EnCours'){
      this.router.navigate(['/commandeEnCours']);
    }
    else{
      this.router.navigate(['/commandeTermine']);
    }
  }


}
