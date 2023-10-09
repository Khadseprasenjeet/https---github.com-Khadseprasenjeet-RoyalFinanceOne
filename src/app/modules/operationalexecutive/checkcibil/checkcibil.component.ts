import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../../shared/common.service';
import { MatDialog } from '@angular/material/dialog';
import { OeService } from 'src/app/services/oe.service';

@Component({
  selector: 'app-checkcibil',
  templateUrl: './checkcibil.component.html',
  styleUrls: ['./checkcibil.component.css']
})
export class CheckcibilComponent {
  constructor(private route:Router, private fb:FormBuilder,private common:CommonService,private dialog:MatDialog ,private oe:OeService){
  }
  
  top: number;
  monthlyInterestRatio: number;
  bottom: number;
  sp: number;
  full: number;
  emi: number;
    interestt: number;
    total: number;
    emiForm: FormGroup;
    panNumber: string;
    name: string;
    date: Date;
    cibil: number;

    ngOnInit(): void {
      this.emiForm = this.fb.group({
        panNumber: ['', Validators.required],
        name:['', Validators.required],
         date: ['', Validators.required],
      })
      const modeldiv=document.getElementById('myModal');
  if(modeldiv!=null)
  {
  modeldiv.style.display='block';
  }
    }


    isValidPan(pan: string): boolean 
    {
   
  
     
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      return panRegex.test(pan);
    }
    // update() {
    //   this.monthlyInterestRatio = (this.emiForm.value.interest / 100) / 12;
    //   this.top = Math.pow((1 + this.monthlyInterestRatio), this.emiForm.value.tenure*12);
    //   this.bottom = this.top - 1;
    //   this.sp = this.top / this.bottom;
    //   this.emi = ((this.emiForm.value.principal * this.monthlyInterestRatio) * this.sp);
    //   this.full = this.emiForm.value.tenure*12 * this.emi;
    //   this.interestt = this.full - this.emiForm.value.principal;
    // }
  
  
   
  
    generateCibil(): void {
    // Validate PAN number
      if (!this.isValidPan(this.emiForm.value.panNumber)) {
       
        Swal.fire({
          position:'top',
          showConfirmButton:false,
          icon:'warning',
          title:'INVALID PAN NUMBER',
          timer:1500
          })
          return  ;}
       // Generate a random number for CIBIL score (between 400 and 900)
      this.cibil = Math.floor(Math.random() * (900 - 500 )) + 400;
        this.oe.c.bankDatail.cibilScore=this.cibil;
      
      this.oe.updatEnquiry(this.oe.c).subscribe();
    }
  

  

    close(){
      this.dialog.closeAll()
    }

}
