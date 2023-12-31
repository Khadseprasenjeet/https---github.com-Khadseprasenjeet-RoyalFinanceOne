import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CIBILScore } from 'src/app/model/cibilscore';
import { Employee } from 'src/app/model/employee';
import { Enquiry } from 'src/app/model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  getEmployee() {
     alert("data servive");
   return  this.http.get("http://localhost:9091/getEmployee");
   
  }
  createEmployee(formData: FormData) {
   return this.http.post("http://localhost:9091/saveEmployee",formData);
  }
  file(file: any) {
    throw new Error('Method not implemented.');
  }

  url:String="http://abhishek:9091";
  createUser(formData: FormData) {
   
   
return this.http.post("http://localhost:9091/customer/save_customer",formData);




  }
  saveProfile(value: Partial<{ firstCtrl: string; }>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  cbl:number;


  enq:Enquiry={
    enquiryId: 0,
    customerName: undefined,
    pancardNumber: 0,
    customerMobileNumber: 0,
    customerAlternateMobileNumber: 0,
    customerEmailId: undefined,
    customerDateOfBirth: 0,
    enquiryStatus: '',
    cibilScore: new CIBILScore
  }
  saveEnquiryData(en:Enquiry){

    return this.http.post("http://localhost:9091/postEnquiry",en);

  }
  getEnquiry(){
    return this.http.get("http://localhost:9091/get_Enquiry");
  }

  getEnquiryDetails(enquiryId: number, enquiryObject: Enquiry) {
    return this.http
      .put("http://localhost:9091/getCibilScore/" + enquiryId, enquiryObject)
      .subscribe();
  }
  approveEnquiry(enquiryId: number, enquiryObject: Enquiry){
    return this.http
      .put("http://localhost:9091/approveEnquiry/" + enquiryId, enquiryObject)
      .subscribe();
  }
  rejectEnquiry(enquiryId: number, enquiryObject: Enquiry){
    return this.http
      .put("http://localhost:9091/rejectEnquiry/" + enquiryId, enquiryObject)
      .subscribe();
  }

//get customer
getcustomer(){
  return this.http.get("http://localhost:9091/customer/getcustomer")
}

getDocuments(){
  return this.http.get("http://abhishek:9091/document/getdoc");
}
}
