import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from '../../service/client-api.service';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit{

  ngOnInit(): void {
      this.getAllClient();
  }

constructor(private router:Router,private apiClient:ClientApiService){}
clientData:any;


selectOption:any;
  navigatePage(selectOption:string):void{
    if(selectOption==='EnCours'){
      this.router.navigate(['/commandeEnCours']);
    }
    else{
      this.router.navigate(['/commandeTermine']);
    }
  }

  getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.clientData=res;
    })
  }
}
