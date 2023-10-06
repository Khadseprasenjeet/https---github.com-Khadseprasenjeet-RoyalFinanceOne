import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'
import { CommonService } from '../../shared/common.service';


@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css'],

  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
  ],

})
export class ApplyloanComponent {
  indeterminate = false;
  isLinear = false;
  selected = 'option2';
  constructor(private fb: FormBuilder, public cs: CommonService) { }
  applyreg: FormGroup;

  ngOnInit() {
    this.applyreg = this.fb.group({



      firstFormGroup: this.fb.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        motherName: ['', Validators.required],
        dob: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        email: ['', Validators.required],
        adharNumber: ['', Validators.required],
        pan: ['', Validators.required]

      }),
      secondFormGroup: this.fb.group({

        houseNumber: ['', Validators.required],
        landmark: ['', Validators.required],
        streetName: ['', Validators.required],
        cityName: ['', Validators.required],
        taluka: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
      thirdFormGroup: this.fb.group({
        houseNumber: ['', Validators.required],
        landmark: ['', Validators.required],
        streetName: ['', Validators.required],
        cityName: ['', Validators.required],
        taluka: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
      fourthFormGroup: this.fb.group({
        fourthCtrl: ['', Validators.required],
        accountHolderName: ['', Validators.required],
        bankAccountNumber: ['', Validators.required],
        bankName: ['', Validators.required],
        IFSCCode: ['', Validators.required],
        branchName: ['', Validators.required],
        country: ['', Validators.required]

      }),
      fifthFormGroup: this.fb.group({
        fifthCtrl: ['', Validators.required],
      }),

    })
  }
 
  SaveCustomer()
    {
        let userJson:string=JSON.stringify(this.applyreg.value);
        const formData:FormData=new FormData();
           formData.append("userJson",userJson);
           formData.append("prof",this.profileImg);
           formData.append("Aadhar",this.aadhar);
           formData.append("pan",this.pan);
           formData.append("sign",this.sign);
           formData.append("slip",this.slip);
           formData.append("lic",this.lic);
           formData.append("bank",this.bank);

       this.cs.createUser(formData).subscribe((data:any)=>
       {
        console.log(data)
       }
       )
    }

    profileImg:any;
    aadhar:any;
    pan:any;
    sign:any;
    slip:any;
    lic:any;
    bank:any;
    onSelectProfile(value:any)
    {
      this.profileImg=value.target.files[0];
      console.log(this.profileImg);
    }
    onSelectAadhar(value:any)
    {
      this.aadhar=value.target.files[0];
    }
    onSelectPan(value:any)
    {
      this.pan=value.target.files[0];
    }
    onSelectSign(value:any)
    {
      this.sign=value.target.files[0];
    }
     onSelectSlip(value:any)
    {
      this.slip=value.target.files[0];
    }
     onSelectLic(value:any)
    {
      this.lic=value.target.files[0];
    }
      onSelectBank(value:any)
    {
      this.bank=value.target.files[0];
    }




}




