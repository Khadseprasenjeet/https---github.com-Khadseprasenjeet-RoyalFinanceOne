import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { CommonService } from '../../shared/common.service';
import { customerclass } from 'src/app/class/customerclass';
import { MatDialog } from '@angular/material/dialog';
import { CheckcibilComponent } from '../checkcibil/checkcibil.component';

@Component({
  selector: 'app-view-allenquiry',
  templateUrl: './view-allenquiry.component.html',
  styleUrls: ['./view-allenquiry.component.css']
})
export class ViewAllenquiryComponent {
  constructor(private common:CommonService ,private route:Router,private dialog:MatDialog){

  }
  enqq:customerclass[];
  cibil:number;

  getenquiry(){

   
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
  }


}
