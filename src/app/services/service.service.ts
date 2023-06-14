
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from 'src/app/models/contactSchema';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {





  
  BaseUrl='https://celebrityapp.onrender.com'

  constructor(private http:HttpClient,private toastr:ToastrService) {}

  notification=this.toastr


handleError(error:HttpErrorResponse){

let errorMsg:string=""

if(error.error){

errorMsg= `error:${error.message}`
}
else{
  errorMsg=`status ${error.status} and error ${error.message}`}

}


getAllcontacts(){
  return this.http.get(`${this.BaseUrl}/contacts`)
}

deleteContacts(id:any){

return this.http.delete(`${this.BaseUrl}/contacts/${id}`)
}


viewContact(id:any){

  return this.http.get(`${this.BaseUrl}/contacts/${id}`)
}

editContact(id:any,contact:contactSchema){


  return this.http.put(`${this.BaseUrl}/contacts/${id}`,contact)
}

addcontact(contact:contactSchema){
  return this.http.post(`${this.BaseUrl}/contacts`,contact)
}
}

