import { Component, OnInit } from '@angular/core';
import { ClientApiService } from '../../service/client-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../../model/clientmodel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit{

  clientData?:client[]|any;
  idRoute!:any;
  constructor(private apiClient:ClientApiService,private activeRoute:ActivatedRoute,private route:Router,private toastr:ToastrService){}

  ngOnInit(): void {

    this.idRoute=this.activeRoute.snapshot.paramMap.get('id');

    this.apiClient.fetchData(this.idRoute).subscribe((data:client)=>{
      this.clientData=data;
    })

  }

  updateClient(){
    this.apiClient.updateClient(this.clientData,this.idRoute).subscribe((res:client)=>{
      this.toastr.success("Client Modifié avec success!");
      this.route.navigate(['/client']);
    })
  }
}
