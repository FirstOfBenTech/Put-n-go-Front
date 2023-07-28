import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from '../../service/client-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { client } from '../../model/clientmodel';
import { CommandeApiService } from '../../service/commande-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit{

  commandeEncoursForm:FormGroup|any;

constructor(private router:Router,private apiClient:ClientApiService,private formBuilder:FormBuilder,private apiCommande:CommandeApiService,private toarst:ToastrService){}

  ngOnInit(): void {
      this.getAllClient();
      this.getAllCommande();
      this.commandeEncoursForm=this.formBuilder.group({
       clientId:['',Validators.required],
        date:['',Validators.required],
        modeleId:['',Validators.required],
        quantite:['',Validators.required],
        avance:['',Validators.required],
        remise:['',Validators.required],
        valide:['']
      })
  }


clientData:any[]=[];
commandeData:any[]=[];


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
  submitCommande(data:any){
    this.apiCommande.addCommande(data).subscribe(res=>{
      this.toarst.success('Commande ajouté avec success !');
      this.commandeEncoursForm.reset();
      this.getAllCommande();
    })
  }

  selectedOption(event:any){
    const selected=event.target.value;
  }

  getAllCommande(){
    this.apiCommande.getCommande().subscribe(res=>{
      this.commandeData=res;
    })
  }
  getClientName(clientId:number):string{
    const client=this.clientData.find(c => c.id === clientId);
    return client ? client.prenom: 'Inconnu';
  }
  getModeleName(modeleId:number){
  }

  validerCommande(commande:any):void{
    this.apiCommande.validerCommande(commande.id).subscribe(()=>{
      this.getAllCommande();
      this.toarst.success('Commande Validé avec success !')
    })
  }
}

