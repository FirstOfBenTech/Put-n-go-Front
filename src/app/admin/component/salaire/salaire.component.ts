import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent {
 constructor(private router:Router){}

 navigatePrevious(){
  this.router.navigate(['/comptabilite'])
 }
}
