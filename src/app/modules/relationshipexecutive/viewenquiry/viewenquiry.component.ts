import { Component } from '@angular/core';
import { CommonService } from '../../shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent {
  constructor(private common:CommonService){

  }
  enqq:Enquiry[];
  getenquiry(){

   
  }
  ngOnInit(){
    this.common.getEnquiry().subscribe((en:Enquiry[])=>{

      
      this.enqq=en;
    })
  }

}
