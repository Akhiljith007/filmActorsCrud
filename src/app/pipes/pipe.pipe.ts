import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(allContacts:any[] ,searchKey:string,propertyName:string ): any[]{

    const result:any=[]
    
       if(!allContacts|| searchKey=="" || propertyName==""){
    
       return allContacts
       }
    
       allContacts.forEach((item:any)=>{
    
        if(item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    
          result.push(item)
        }
    
       })
    
    return result;
    
      }

}
