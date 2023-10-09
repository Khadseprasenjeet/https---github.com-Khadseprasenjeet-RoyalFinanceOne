import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormGroupName } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'
import { CommonService } from '../../shared/common.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    MatDatepickerModule,
  ],

})
export class ApplyloanComponent {
  indeterminate = false;
  isLinear = false;
  selected = 'option2';
  constructor(private fb: FormBuilder, public cs: CommonService) { }
  applyreg: FormGroup;

  // firstFormGroup:FormGroupName;
  // secondFormGroup:FormGroupName;
  // thirdFormGroup :FormGroupName ;
  // fourthFormGroup  :FormGroupName ;


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


        landMark: ['', Validators.required],
        areaName: ['', Validators.required],
        cityName: ['', Validators.required],
        districtName: ['', Validators.required],
        stateName: ['', Validators.required],
        pinCodeNumber: ['', Validators.required],
      }),
      thirdFormGroup: this.fb.group({
        landMark: ['', Validators.required],
        areaName: ['', Validators.required],
        cityName: ['', Validators.required],
        districtName: ['', Validators.required],
        stateName: ['', Validators.required],
        pinCodeNumber: ['', Validators.required],
      }),
      fourthFormGroup: this.fb.group({


        bankAccountNumber: ['', Validators.required],
        bankName: ['', Validators.required],
        ifscNumber: ['', Validators.required],
        branchName: ['', Validators.required],
        cardNumber: ['', Validators.required]

      }),
      fifthFormGroup: this.fb.group({



        profileImage: ['', Validators.required],
        aadhar: ['', Validators.required],
        pan: ['', Validators.required],

        sign: ['', Validators.required],
        slip: ['', Validators.required],

        bank: ['', Validators.required],
        carQuo: ['', Validators.required],
        itr: ['', Validators.required],
        form16: ['', Validators.required],

      }),

    })
  }

  SaveCustomer() {
    console.log("save Customer run")

    let userJson: string = JSON.stringify(this.applyreg.controls['firstFormGroup'].value);
    let PAddress: string = JSON.stringify(this.applyreg.controls['secondFormGroup'].value);
    let localAddress: string = JSON.stringify(this.applyreg.controls['thirdFormGroup'].value);
    let bankdetails: string = JSON.stringify(this.applyreg.controls['fourthFormGroup'].value);
    const formData: FormData = new FormData();
    formData.append("customerprofile", userJson);
    formData.append("customerPermantAddress", PAddress);
    formData.append("customerLocalAddress", localAddress);

    formData.append("customerBankDetails ", bankdetails);
    formData.append("prof", this.profileImg);
    formData.append("adhar", this.aadhar);
    formData.append("cPan", this.pan);
    formData.append("sign", this.sign);
    formData.append("salaryslip", this.slip);

    formData.append("bankstatement", this.bank);
    formData.append("quation", this.carQuo);
    formData.append("itr", this.itr);
    formData.append("form16", this.form16);


    alert(formData);
    this.cs.createUser(formData).subscribe((data: any) => {
      console.log(data)
      alert("string");
    }
    )
  }

  profileImg: any;
  aadhar: any;
  pan: any;
  sign: any;
  slip: any;
  bank: any;
  carQuo: any;
  itr: any;
  form16: any;
  onSelectProfile(value: any) {
    this.profileImg = value.target.files[0];
    console.log(this.profileImg);
  }
  onSelectAadhar(value: any) {
    this.aadhar = value.target.files[0];
  }
  onSelectPan(value: any) {
    this.pan = value.target.files[0];
  }
  onSelectSign(value: any) {
    this.sign = value.target.files[0];
  }
  onSelectSlip(value: any) {
    this.slip = value.target.files[0];
  }

  onSelectBank(value: any) {
    this.bank = value.target.files[0];
  }

  onSelectCarQuo(value: any) {
    this.carQuo = value.target.files[0];
  }
  onSelectITR(value: any) {
    this.itr = value.target.files[0];
  }
  onSelectForm16(value: any) {
    this.form16 = value.target.files[0];
  }


  get firstform() {
    return this.applyreg.get("firstFormGroup") as FormGroup;
  }
  get secondform() {
    return this.applyreg.get("secondFormGroup") as FormGroup;
  }

  get thirdform() {
    return this.applyreg.get("thirdFormGroup") as FormGroup;
  }

  get fourthform() {
    return this.applyreg.get("fourthFormGroup") as FormGroup;
  }
  get fifthform() {
    return this.applyreg.get("fifthFormGroup") as FormGroup;
  }



  saveCustomers() {
    if (this.applyreg.valid) {

      console.log(this.applyreg.value);
    }
  }



}




