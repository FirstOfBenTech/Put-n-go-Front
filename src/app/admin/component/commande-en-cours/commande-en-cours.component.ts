import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent {

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
