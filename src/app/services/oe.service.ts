import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class OeService {

  constructor(private http:HttpClient) { }

c:Enquiry={
  enquiryId: 0,
  customerName: undefined,
  pancardNumber: 0,
  customerMobileNumber: 0,
  customerAlternateMobileNumber: 0,
  customerEmailId: undefined,
  customerDateOfBirth: 0,
  enquiryStatus: '',
  cibilScore: {
    cibilId: 0,
    cibilScore: 0,
    cibilRemark: ''
  }
}

  getEnqury(){
    return this.http.get("");
  }

  updatEnquiry(c:Enquiry){
  return this.http.put("",c)
  }
  getcustomer(){
    return this.http.get("");
  }


}
