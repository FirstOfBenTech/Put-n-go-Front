import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
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
    {name:'img1.jpg',caption:'img1'},
    {name:'img2.jpeg',caption:'img2'},
    {name:'img3.jpeg',caption:'img3'},
    {name:'img4.jpeg',caption:'image4'},
    {name:'img5.jpg',caption:'img5'},
    {name:'img6.jpeg',caption:'img6'}
  ]
}
