import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { CommonService } from '../../shared/common.service';
import { FormBuilder } from '@angular/forms';
import { OeService } from 'src/app/services/oe.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckcibilComponent } from '../checkcibil/checkcibil.component';


@Component({
  selector: 'app-view-allenquiry',
  templateUrl: './view-allenquiry.component.html',
  styleUrls: ['./view-allenquiry.component.css']
})
export class ViewAllenquiryComponent {

  constructor(private common:CommonService,private fb:FormBuilder , private oe:OeService,private dialog:MatDialog) { }


  eqruiry:Enquiry[];

  ngOnInit(): void {
    this.oe.getEnqury().subscribe((data:Enquiry[])=>{
      this.eqruiry=data;
    })}

  
  checkcibil( c:Enquiry){
    this.oe.c = Object.assign({},c)

    this.dialog.open(CheckcibilComponent)
  }
accpet(c:Enquiry){
  this.oe.c = Object.assign({},c)
  this.oe.c.cibilScore.cibilRemark="Application Passed By Operational Executive"
  this.oe.updatEnquiry(this.oe.c).subscribe();
}

rejectd(c:Enquiry){
  this.oe.c = Object.assign({},c)
  this.oe.c.cibilScore.cibilRemark="Application Rejected By Operational Executive"
  this.oe.updatEnquiry(this.oe.c).subscribe();
}



}
