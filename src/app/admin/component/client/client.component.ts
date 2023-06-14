import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from '../../model/clientmodel';
import { ClientApiService } from '../../service/client-api.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  dataClient?:Array<client>;
  //dataClient:undefined|client[];

  clientForm:FormGroup |any;
  constructor(private formBuilder:FormBuilder,private router:Router,private apiClient:ClientApiService){}

  ngOnInit(): void {
    this.getAllClient();
    this.clientForm=this.formBuilder.group({
      prenom:['',Validators.required],
      nom:['',Validators.required],
      numeroTel:['',Validators.required],
      mesure:['',Validators.required]
    })
  }

  submitClient(data:client){
    this.apiClient.addClient(data).subscribe(res=>{
      this.clientForm.reset();
      // this.router.navigate(["/client"]);
    })}

  getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.dataClient=res;
    })
    console.log(this.dataClient);



  }
}
