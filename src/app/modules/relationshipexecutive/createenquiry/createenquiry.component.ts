import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-createenquiry',
  templateUrl: './createenquiry.component.html',
  styleUrls: ['./createenquiry.component.css']
})
export class CreateenquiryComponent {
  constructor(public fb:FormBuilder,private common:CommonService) { }

  enquiryForm:FormGroup;

  ngOnInit(): void {

    this.enquiryForm=this.fb.group({
    
      // id:[],
      customerName:['Daniel',[Validators.required]],
      pancardNumber:['GKZPK9636P'],
      customerMobileNumber:[8788164114],
      customerAlternateMobileNumber:[7057279657],
      customerEmailId:['bingopanda700@gmail.com'],
      customerDateOfBirth:['15.01.1887'],
      
      
    

    })
  }

  isSubmited:string=''

  onSubmit()
  {
   
    if(this.enquiryForm.valid)
    {
      this.common.saveEnquiryData(this.enquiryForm.value).subscribe();
      
      window.location.reload();
    }
     

  
     }

}
