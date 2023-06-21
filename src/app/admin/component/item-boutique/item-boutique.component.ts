import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-boutique',
  templateUrl: './item-boutique.component.html',
  styleUrls: ['./item-boutique.component.css']
})
export class ItemBoutiqueComponent {

  constructor(private route:Router){}

  navigatePrevious(){
    this.route.navigate(['/boutique']);
  }

}
