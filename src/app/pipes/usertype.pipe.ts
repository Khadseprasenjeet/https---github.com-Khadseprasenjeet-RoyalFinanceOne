import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usertype'
})
export class UsertypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if(value=='re')
       {
         return "RELATIONSHIP EXECUTIVE"
       }
       else if(value=='oe')
       {
         return "OPERATIONAL EXECUTIVE"
       }
       else if(value=='cm')
       {
        return "CREDIT MANAGER"
       }
       else if(value=='ah')
       {
        return "ACCOUNT HEAD"

       }
       else if(value=='admin')
       {
        return "ADMIN"

       }
    return null;
  }

}
