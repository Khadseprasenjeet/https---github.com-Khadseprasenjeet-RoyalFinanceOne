import { Component } from '@angular/core';
import { CommonService } from '../../shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent {
  constructor(private common:CommonService ,private route:Router){

  }
  enqq:Enquiry[];
  getenquiry(){

   
  }
  ngOnInit(){
    this.common.getEnquiry().subscribe((en:Enquiry[])=>{

      
      this.enqq=en;
    })
  }
  checkcibil(){


  }

}
