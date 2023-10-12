import { Component } from '@angular/core';
import { CustomerDdocument } from 'src/app/model/customer-ddocument';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-verify-document',
  templateUrl: './verify-document.component.html',
  styleUrls: ['./verify-document.component.css']
})
export class VerifyDocumentComponent {

  constructor(private common:CommonService){}

  customerName:String =document.cookie
  doc:CustomerDdocument;

  image(){
    this.common.getDocuments().subscribe((d:CustomerDdocument)=>{
      this .doc=d;
    });
  }
  ngOnInit(){
    this.image();

  }
  docsVerified(){
    console.log("inside docs verified")
  }
  docsNotVerified(){
    console.log("inside docs not verified")
  }


}
