import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contactSchema } from 'src/app/models/contactSchema';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  contact:contactSchema={}
  constructor(private api:ServiceService,private router:ActivatedRoute,private route:Router){}

  
  ngOnInit(): void {

    this.router.params.subscribe({
      next:(data:any)=>{
        console.log(data);
      const {id}=data

      this.api.viewContact(id).subscribe({
        next:(data:any)=>{
          console.log(data);
          this.contact=data
        }
      })
        
      }
    })

  
    
  }



  editContacts(id:any){

if(!this.contact.Date||!this.contact.Nationality||!this.contact.Note||!this.contact.Profession||!this.contact.Town||!this.contact.email||!this.contact.id||!this.contact.imgF||!this.contact.imgS||!this.contact.instagram||!this.contact.name||!this.contact.originalName||!this.contact.twitter){

this.api.notification.warning("Invalid Forms",'Warning' )

}

else{    this.api.editContact(id, this.contact).subscribe({
  next: (response:any)=>{
    console.log(response);

   this.api.notification.success("successfully updated...")

   setTimeout(() => {
    this.route.navigateByUrl("")
    
   }, 3000);
   
  
  }
})}
  

  }

}
