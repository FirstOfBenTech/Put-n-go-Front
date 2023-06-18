import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent {

  constructor(private router:Router){}

  NavigateElement(){
    this.router.navigate(["/itemBoutique"]);
  }
}
