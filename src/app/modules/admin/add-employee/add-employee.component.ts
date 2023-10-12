

import { CommonService } from '../../shared/common.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormGroupName } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'

import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],

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

export class AddEmployeeComponent {


  indeterminate = false;
  isLinear = false;
  selected = 'option2';
  constructor(private fb: FormBuilder, public cs: CommonService) { }
  empreg: FormGroup;




  ngOnInit() {
    this.empreg = this.fb.group({



      employeeName: ['', Validators.required],
      employeeAdress: ['', Validators.required],
      employeeNumber: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      employeeRole: ['', Validators.required],
  
      

    
     
  })
  
  }

  SaveEmployee() {
    console.log("save Employee run")

    let userJson: string = JSON.stringify(this.empreg.value);

    const formData: FormData = new FormData();
    formData.append("employee", userJson);
    formData.append("photo", this.employeeProfilePhoto);
    formData.append("adhar", this.employeeAdhar);
    formData.append("pan", this.employeePan);
    formData.append("sign", this.employeeSignature);



    alert(formData);
    this.cs.createEmployee(formData).subscribe((data: any) => {
      console.log(data)
      alert("string");
    }
    )
  }

  employeeProfilePhoto: any;
  employeeAdhar: any;
  employeePan: any;
  employeeSignature: any;

  onSelectProfile(value: any) {
    this.employeeProfilePhoto = value.target.files[0];
    console.log(this.employeeProfilePhoto);
  }
  onSelectAadhar(value: any) {
    this.employeeAdhar = value.target.files[0];
  }
  onSelectPan(value: any) {
    this.employeePan = value.target.files[0];
  }
  onSelectSign(value: any) {
    this.employeeSignature = value.target.files[0];
  }




}






