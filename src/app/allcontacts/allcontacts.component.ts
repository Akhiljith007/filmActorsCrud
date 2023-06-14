import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent implements OnInit  {


  searchKey = ""
  favourtes=''
allcontact:any=[]
errorMsg:string=""
sortdata='name'
SortbyParam=''
sortedComplted=''
isLoading:boolean=true

  constructor(private api:ServiceService ){}

  ngOnInit(): void {

    this.api.getAllcontacts().subscribe({
      next: (response:any)=>{console.log(response);
      
        this.allcontact=response
        this.isLoading=false
      },
    
    error:(err:any)=>{
      console.log(err);
      this.errorMsg=err.message
      this.isLoading=true
    }
    
    }
    )
  
  }
deleteContacts(id:any){

  this.api.deleteContacts(id).subscribe({
    next: (response:any)=>{
     this.allcontact
    
  
   window.location.reload()
   this.isLoading=false
    }
    
  })


}

searchfavourites(){

  if(this.searchKey){this.favourtes=this.searchKey}

  else{this.api.notification.error("Invalid search!!")}



 
}


sortingData(value:string){

this.sortedComplted=value

}

refresh(){
  window.location.reload()
  this.isLoading=false
}


}
