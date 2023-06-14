import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {



  contact:any={}
  errorMsg:string=""
 constructor(private api:ServiceService,private router:ActivatedRoute){}


 ngOnInit(): void {

   this.router.params.subscribe((data)=>{
     console.log(data);

     const {id}=data

     this.api.viewContact(id).subscribe({
       next: (response:any)=>{
         console.log(response);
        

        this.contact=response
       },

       error:(err:any)=>{
         console.log(err.message);
         this.errorMsg=err.message
         
       }
     })
     
   })
  
 }

}
