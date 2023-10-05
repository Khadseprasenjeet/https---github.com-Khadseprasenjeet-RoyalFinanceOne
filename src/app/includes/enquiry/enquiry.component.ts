import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/modules/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  constructor(public fb:FormBuilder,private common:CommonService) { }

  enquiryForm:FormGroup;

  ngOnInit(): void {

    this.enquiryForm=this.fb.group({
      





      enquiryId:[],
      // id:[],
      customerName:['Daniel',[Validators.required]],
      pancardNumber:['GKZPK9636P'],
      customerMobileNumber:[8788164114],
      customerAlternateMobileNumber:[7057279657],
      customerEmailId:['bingopanda700@gmail.com'],
      customerDateOfBirth:['15.01.1887'],
      enquiryStatus:[''],
      
    

    })
  }

  isSubmited:string=''

  onSubmit()
  {
   
    if(this.enquiryForm.valid)
    {
      this.common.saveEnquiryData(this.enquiryForm.value).subscribe();
      // this.isSubmited='Your Enquiry Submitted successfully';
      // document.cookie = JSON.stringify( this.enquiryForm.value);
      window.location.reload();
    }
     

  
     }

}
