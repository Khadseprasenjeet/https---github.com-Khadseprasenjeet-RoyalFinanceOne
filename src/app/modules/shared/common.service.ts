import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  cbl:number;


  enq:Enquiry={
    enquiryId: 0,
    customerName: undefined,
    pancardNumber: 0,
    customerMobileNumber: 0,
    customerAlternateMobileNumber: 0,
    customerEmailId: undefined,
    customerDateOfBirth: 0
  }
  saveEnquiryData(en:Enquiry){

    return this.http.post("http://localhost:3000/Enquiry",en);

  }
  getEnquiry(){
    return this.http.get("http://localhost:3000/Enquiry");
  }
}
