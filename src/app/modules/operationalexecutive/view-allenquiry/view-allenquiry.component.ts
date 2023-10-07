import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { CommonService } from '../../shared/common.service';
import { FormBuilder } from '@angular/forms';
import { CIBILScore } from 'src/app/model/cibilscore';

@Component({
  selector: 'app-view-allenquiry',
  templateUrl: './view-allenquiry.component.html',
  styleUrls: ['./view-allenquiry.component.css']
})
export class ViewAllenquiryComponent {
  constructor(private common:CommonService,private fb:FormBuilder) { }
  // cibilData:FormGroup;
  enquiry:Enquiry[];

   cibil:CIBILScore[];

  enquirydata:Enquiry;

  ngOnInit(): void {
    this.common.getEnquiry().subscribe((data:Enquiry[])=>{
      this.enquiry=data;
       // console.log(this.enquiry.cibil.cibilId);
    })

    

    //   this.cibilData=this.fb.group({
    //     cibilId:[],
    //     cibilScore:[],
    //     cibilRemark:['APPROVE']
    // })
  }

  // checkCIBIL(enquiryId : number)
  // {
  //   //  this.common.getcibildata();
  //   //  this.common.getcibildata(enquiryId).subscribe(data=>{this.enquirydata=data});
    
  //    console.log(enquiryId);
  // }

  checkCIBIL(enquiryId: number, enquiryObject: Enquiry) {
    this.common.getEnquiryDetails(enquiryId, enquiryObject);
    window.location.reload();
  }

  approveEnquiry(enquiryId: number, enquiryObject: Enquiry){
    this.common.approveEnquiry(enquiryId, enquiryObject);
    window.location.reload();
  }

  rejectEnquiry(enquiryId: number, enquiryObject: Enquiry){
    this.common.rejectEnquiry(enquiryId, enquiryObject);
    window.location.reload();
  }


}
