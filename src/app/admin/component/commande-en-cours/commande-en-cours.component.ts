import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from '../../service/client-api.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { client } from '../../model/clientmodel';
import { CommandeApiService } from '../../service/commande-api.service';
import { ToastrService } from 'ngx-toastr';
import { ProduitApiService } from '../../service/produit-api.service';
import { produit } from '../../model/produitmodel';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit{

  public utilisateurConnecte=true;
  commandeEncoursForm:FormGroup|any;
  nombreCommande:any;
  selectedItems:number[]=[];
  total:any;
  prixModel:any;
  selectedProduit:produit| null=null;

constructor(private router:Router,private apiClient:ClientApiService,private formBuilder:FormBuilder,private apiCommande:CommandeApiService,private toarst:ToastrService,private produitItem:ProduitApiService,private apiProduit:ProduitApiService){}

  ngOnInit(): void {
      this.getAllClient();
      this.getAllCommande();
      this.getAllProduit();
      this.commandeEncoursForm=this.formBuilder.group({
       clientId:['',Validators.required],
        date:['',Validators.required],
        modeles:this.formBuilder.array([this.creerModele()]),
        avance:['',Validators.required],
        remise:['',Validators.required],
        valide:[''],
        livre:['']
      })
  }


clientData:any[]=[];
produitData:any[]=[];
commandeData:any[]=[];
productControl:any;


selectOption:any;
navigatePage(selectOption:string):void{
  if(selectOption==='EnCours'){
    this.router.navigate(['/commandeEnCours']);
  }
  else if(selectOption==='Termine'){
    this.router.navigate(['/commandeTermine']);
  }
  else{
    this.router.navigate(['/commandeLivre']);
  }
}

onSelectedProduct(produit:produit){
  this.selectedProduit=produit;
}
ajouterModele(){
  this.modeles.push(this.creerModele());
}

get modeles(){
  return this.commandeEncoursForm.get('modeles') as FormArray;
}
creerModele():FormGroup{
  this.productControl = this.formBuilder.group({
    modeleId:['',Validators.required],
    quantite:['',Validators.required],
    totalModele:['',Validators.required]
  })
  this.produitData.push(this.productControl);

  return this.productControl;
}

getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.clientData=res;
    })
  }
getAllProduit(){
    this.produitItem.getAllProduit().subscribe(produit=>{
       this.produitData=produit;
    })
  }
submitCommande(data:any){
    this.apiCommande.addCommande(data).subscribe(res=>{
      this.toarst.success('Commande ajouté avec success !');
      this.commandeEncoursForm.reset();
      this.getAllCommande();
      this.selectedProduit=null;
    })
  }

  selectedOption(event:any){
    const selected=event.target.value;
  }

  getAllCommande(){
    this.apiCommande.getCommande().subscribe(commandes=>{
      this.commandeData=commandes.filter(commande=>commande.valide==false || commande.valide==null && commande.livre==false);
      this.nombreCommande=this.commandeData.length;
      console.log(this.commandeData);

    })
  }
  getClientName(clientId:number):string{
    const client=this.clientData.find(c => c.id === clientId);
    return client ? client.prenom: 'Inconnu';
  }
  getModeleName(modeleId:number){
  }

  getTotal(){

  }

  validerCommande(commande:any){
    const confirmation = confirm('Etes vous sûr de valider la commmande ?');
    if(confirmation){
      return this.apiCommande.validerCommande(commande.id).subscribe(()=>{
      this.getAllCommande();
      this.toarst.success('Commande Validé avec success !')
      })
    }
    else{
      return false;
    }
  }
  deleteCommande(commande:any){
    const confirmation = confirm('Voulez vous supprimez la commmande ?');
    if(confirmation){
      return this.apiCommande.deleteCommande(commande).subscribe(res=>{
        this.toarst.success('Commande supprimé !');
        this.getAllCommande();
      })
    }
    return false;
  }
}

