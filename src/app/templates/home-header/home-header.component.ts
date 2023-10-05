import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  constructor(public fb:FormBuilder){}

  enquiryform:FormGroup;

  ngOnInit(){
this.enquiryform=this.fb.group({
  name:'',email:'',phone_no:'',message:''});


  }

  save(){

  }
}
