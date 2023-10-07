import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../../shared/common.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-checkcibil',
  templateUrl: './checkcibil.component.html',
  styleUrls: ['./checkcibil.component.css']
})
export class CheckcibilComponent {
  constructor(private route:Router, private fb:FormBuilder,private common:CommonService,private dialog:MatDialog){

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
    // update() {
    //   this.monthlyInterestRatio = (this.emiForm.value.interest / 100) / 12;
    //   this.top = Math.pow((1 + this.monthlyInterestRatio), this.emiForm.value.tenure*12);
    //   this.bottom = this.top - 1;
    //   this.sp = this.top / this.bottom;
    //   this.emi = ((this.emiForm.value.principal * this.monthlyInterestRatio) * this.sp);
    //   this.full = this.emiForm.value.tenure*12 * this.emi;
    //   this.interestt = this.full - this.emiForm.value.principal;
    // }
  
  
    panNumber: string;
    name: string;
    date: Date;
    cibil: number;
  
    generateCibil(): void {
      console.log(this.common.cus.bankDatails.cibilScore)
  
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
       // Generate a random number for CIBIL score (between 300 and 900)
      this.cibil = Math.floor(Math.random() * (900 - 500 + 1)) + 300;


      this.common.cus.bankDatails.cibilScore=this.cibil

      this.common.saveEnquiryData2(this.common.cus)
    }
  
    isValidPan(pan: string): boolean 
    {
   
  
     
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      return panRegex.test(pan);
    }
  
    
    Closedmodel()
    {
      const modeldiv=document.getElementById('myModal');
      if(modeldiv!=null)
      {
    modeldiv.style.display='none';
    this.route.navigateByUrl("/application/oe");
      }
      
    }


    close(){
      this.dialog.closeAll()
    }

}
