import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fb:FormBuilder,private router:Router){}
  loginForm: FormGroup;
  
  ngOnInit():void{
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
   
  }
  onUserLogin(){
    let un:string=this.loginForm.controls['username'].value;
   let ps:string=this.loginForm.controls['password'].value;
   if(un=='re' && ps=='re@123')
   {
    sessionStorage.setItem('type','re');
    alert("Hello RE")
  this.router.navigateByUrl('/application/re')
   }
   else if(un=='admin' && ps=='admin@123')
   {
    sessionStorage.setItem('type','admin');
    alert("Hello Admin")
  this.router.navigateByUrl('/application/admin')
   }
   else if(un=='oe' && ps=='oe@123')
   {
    sessionStorage.setItem('type','oe');
    alert('Hello OE')
    this.router.navigateByUrl('/application/oe')
   }
   else if(un=='cm' && ps=='cm@123'){
    sessionStorage.setItem('type','cm');
    alert('hello Cm');
    this.router.navigateByUrl('/application/cm')

   }
   else if(un=='ah' && ps=='ah@123'){
    sessionStorage.setItem('type','ah');
    alert('hello AH');
    this.router.navigateByUrl('/application/ah')

   }
   else{
     alert('Enter valid login credentials..!')

   }


  }
}
