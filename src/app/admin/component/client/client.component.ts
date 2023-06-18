import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../../model/clientmodel';
import { ClientApiService } from '../../service/client-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  clientCategory:any=['prenom','nom','numeroTel','mesure'];
  showAllData:any=[];
  filterName:any;
  filterData:any=[];
  showData:any;
  idRoute:any;
  dataClient:Array<client>|any;
  newdataClient?:Array<client>;
  //dataClient:undefined|client[];

  clientForm:FormGroup |any;
  constructor(private formBuilder:FormBuilder,private router:Router,private apiClient:ClientApiService,private route:ActivatedRoute,private toarst:ToastrService){}

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
      this.toarst.success("Client Ajouté avec success!");
      this.clientForm.reset();
      this.getAllClient();
    })}

  getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.dataClient=res;
      this.showData=true;
    })
  }

  deleteClient(id:any){
    return this.apiClient.deleteClient(id).subscribe(res=>{
      this.toarst.success("Client supprimé avec success!");
      this.getAllClient();
    })
  }
  onChange(e:any){
    this.filterName=e.target.value;
    this.showData=false;
    this.dataClient.filter((element:any)=>{
      if(element.category==this.filterName.toLowerCase())
      {
        this.filterData.push(element);
      }
    });
    console.log(this.filterData);

  }
}
