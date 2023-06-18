import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router,config: NgbCarouselConfig){

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  showNavigationArrows = false;
	showNavigationIndicators = false;

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
    {name:'image1.jpg',caption:'image1'},
    {name:'image2.jpg',caption:'image2'},
    {name:'image3.jpg',caption:'image3'},
    {name:'image4.jpg',caption:'image4'}
  ]
}
