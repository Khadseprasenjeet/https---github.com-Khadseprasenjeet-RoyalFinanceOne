import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-view-allenquiry',
  templateUrl: './view-allenquiry.component.html',
  styleUrls: ['./view-allenquiry.component.css']
})
export class ViewAllenquiryComponent {
  constructor(private common:CommonService ,private route:Router){

  }
  enqq:Enquiry[];
  cibil:number;

  getenquiry(){

   
  }
  
  ngOnInit(){
    this.common.getEnquiry().subscribe((en:Enquiry[])=>{
      

      
      this.enqq=en;
    })
    this.cibil=this.common.cbl;
  }
  checkcibil(){

    this.route.navigateByUrl("/check_cibil");

  }


}
