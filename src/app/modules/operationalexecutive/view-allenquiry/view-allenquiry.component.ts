import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { CommonService } from '../../shared/common.service';
import { FormBuilder } from '@angular/forms';
import { CIBILScore } from 'src/app/model/cibilscore';
import { customerclass } from 'src/app/class/customerclass';
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


  eqruiry:customerclass[];

  ngOnInit(): void {
    this.oe.getEnqury().subscribe((data:customerclass[])=>{
      this.eqruiry=data;
    })}

  
  checkcibil( c:customerclass){
    this.oe.c = Object.assign({},c)

    this.dialog.open(CheckcibilComponent)
  }
accpet(c:customerclass){
  this.oe.c = Object.assign({},c)
  this.oe.c.bankDatail.cibilStatus="Application Passed By Operational Executive"
  this.oe.updatEnquiry(this.oe.c).subscribe();
}

rejectd(c:customerclass){
  this.oe.c = Object.assign({},c)
  this.oe.c.bankDatail.cibilStatus="Application Rejected By Operational Executive"
  this.oe.updatEnquiry(this.oe.c).subscribe();
}



}
