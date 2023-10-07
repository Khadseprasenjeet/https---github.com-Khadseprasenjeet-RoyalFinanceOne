import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { CommonService } from '../../shared/common.service';
<<<<<<< HEAD
import { customerclass } from 'src/app/class/customerclass';
import { MatDialog } from '@angular/material/dialog';
import { CheckcibilComponent } from '../checkcibil/checkcibil.component';
=======
import { FormBuilder } from '@angular/forms';
import { CIBILScore } from 'src/app/model/cibilscore';
>>>>>>> 74ab8bb61e98765f6443a563f7a0d719af32c1a2

@Component({
  selector: 'app-view-allenquiry',
  templateUrl: './view-allenquiry.component.html',
  styleUrls: ['./view-allenquiry.component.css']
})
export class ViewAllenquiryComponent {
<<<<<<< HEAD
  constructor(private common:CommonService ,private route:Router,private dialog:MatDialog){

  }
  enqq:customerclass[];
  cibil:number;
=======
  constructor(private common:CommonService,private fb:FormBuilder) { }
  // cibilData:FormGroup;
  enquiry:Enquiry[];

   cibil:CIBILScore[];
>>>>>>> 74ab8bb61e98765f6443a563f7a0d719af32c1a2

  enquirydata:Enquiry;

<<<<<<< HEAD
   
  }
  
  ngOnInit(){
    this.common.getEnquiry().subscribe((en:customerclass[])=>{ this.enqq=en; })
  }



  checkcibil(p:customerclass){
    // alert(this.enqq[0].bankDatails.bankName)
   this.common.cus =Object.assign({},p)
  // alert(this.common.cus.bankDatails.bankName)
  this.common.cus.bankDatails.cibilScore=this.cibil

  this.common.saveEnquiryData22();


  
  }
  conform(){
    this.dialog.open(CheckcibilComponent);
=======
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
>>>>>>> 74ab8bb61e98765f6443a563f7a0d719af32c1a2
  }


}
