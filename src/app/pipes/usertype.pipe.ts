import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usertype'
})
export class UsertypePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {

    if(value=='re')
       {
         return "RelationShip Execetive..!"
       }
       else if(value=='oe')
       {
         return "Operational Execetive..!"
       }
       else if(value=='cm')
       {
        return "Chief Manager...!"
       }
       else if(value=='ah')
       {
        return "Account Head..!"

       }
       else if(value=='admin')
       {
        return "Admin ..!"

       }
    return null;
  }

}
