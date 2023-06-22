import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from '../../service/client-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit{

  commandeEncoursForm:FormGroup|any;
constructor(private router:Router,private apiClient:ClientApiService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
      this.getAllClient();
      this.onFormSubmit();
      this.commandeEncoursForm=this.formBuilder.group({
       // clientName:['',Validators.required],
        date:['',Validators.required],
        //modeleName:['',Validators.required],
        quantite:['',Validators.required],
        avance:['',Validators.required],
        remise:['',Validators.required]
      })
  }


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
  onFormSubmit(){
    console.log(this.commandeEncoursForm.value);

  }
}
