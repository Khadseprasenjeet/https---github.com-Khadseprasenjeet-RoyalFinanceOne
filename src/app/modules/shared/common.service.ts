import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CIBILScore } from 'src/app/model/cibilscore';
import { Enquiry } from 'src/app/model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
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

    return this.http.post(this.url+"/postEnquiry",en);

  }
  getEnquiry(){
    return this.http.get(this.url+"/get_Enquiry");
  }

  getEnquiryDetails(enquiryId: number, enquiryObject: Enquiry) {
    return this.http
      .put(this.url + "/getCibilScore/" + enquiryId, enquiryObject)
      .subscribe();
  }
  approveEnquiry(enquiryId: number, enquiryObject: Enquiry){
    return this.http
      .put(this.url + "/approveEnquiry/" + enquiryId, enquiryObject)
      .subscribe();
  }
  rejectEnquiry(enquiryId: number, enquiryObject: Enquiry){
    return this.http
      .put(this.url + "/rejectEnquiry/" + enquiryId, enquiryObject)
      .subscribe();
  }

//get customer
getcustomer(){
  return this.http.get("http://abhishek:9091/customer/getcustomer")
}

}
