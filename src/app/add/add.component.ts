import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contactSchema } from 'src/app/models/contactSchema';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {



  contact: contactSchema = {}


  constructor(private api: ServiceService, private route: Router) { }


  addContact(contact: contactSchema) {

    if (this.contact.Date||this.contact.Nationality||this.contact.Note||this.contact.Profession||this.contact.Town||this.contact.email||this.contact.id||this.contact.imgF||this.contact.imgS||this.contact.instagram||this.contact.name||this.contact.originalName||this.contact.twitter) {

    
      this.api.addcontact(contact).subscribe({
        next: (Response: any) => {
          setTimeout(() => {
            console.log(Response)
            this.route.navigateByUrl("")

          }, 2000);



          this.api.notification.success("created successfully...")
        },
        error: (err: any) => {
          console.log(err);

        }

      })



    }

    else {



      this.api.notification.warning("Invalid Forms", 'Warning')
  
    
    }


  }
}


