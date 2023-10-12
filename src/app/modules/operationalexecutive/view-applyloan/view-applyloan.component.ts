import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer';

import { CommonService } from '../../shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-view-applyloan',
  templateUrl: './view-applyloan.component.html',
  styleUrls: ['./view-applyloan.component.css']
})
export class ViewApplyloanComponent {
  constructor(private common:CommonService){}

  cus:Customer[];
  En:Enquiry[];


  ngOnInit(){
    this.common.getcustomer().subscribe((c:Customer[])=>{
      this.cus=c;
    })


    

  }

}
