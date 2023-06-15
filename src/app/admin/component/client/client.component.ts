import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../../model/clientmodel';
import { ClientApiService } from '../../service/client-api.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  idRoute:any;
  dataClient?:Array<client>;
  public newdataClient:any|client;
  //dataClient:undefined|client[];

  clientForm:FormGroup |any;
  constructor(private formBuilder:FormBuilder,private router:Router,private apiClient:ClientApiService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getAllClient();
     this.idRoute=this.route.snapshot.paramMap.get('id');
    this.fetchData(this.idRoute);
    this.clientForm=this.formBuilder.group({
      prenom:['',Validators.required],
      nom:['',Validators.required],
      numeroTel:['',Validators.required],
      mesure:['',Validators.required]
    })
  }

  submitClient(data:client){
    this.apiClient.addClient(data).subscribe(res=>{
      alert("Client Ajouté avec succes");
      this.clientForm.reset();
      this.getAllClient();
    })}

  getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.dataClient=res;
    })
  }

  deleteClient(id:any){
    return this.apiClient.deleteClient(id).subscribe(res=>{
      alert("Client supprimé avec succés");
      this.getAllClient();
    })
  }

  fetchData(idRoute:any){
    this.apiClient.fetchData(idRoute).subscribe((data:client)=>{
      this.newdataClient=data;
    })
  }

  updateClient(){
    this.apiClient.updateClient(this.newdataClient,this.idRoute).subscribe(res=>{
      this.router.navigate(["/client"]);
    })
  }
}
