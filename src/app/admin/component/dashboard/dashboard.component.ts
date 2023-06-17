import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}

  navigateClient(){
    this.router.navigate(["/client"]);
  }
  navigateCommande(){
    this.router.navigate(["/commande"]);
  }

  navigateStock(){
    this.router.navigate(["/stock"]);
  }

  navigateBoutique(){
    this.router.navigate(["/boutique"]);
  }
	images=[
    {name:'tailleur1.jpg',caption:'Tailleur1'},
    {name:'tailleur2.jpg',caption:'Tailleur2'},
    {name:'tailleur3.png',caption:'Tailleur3'}
  ]
}
