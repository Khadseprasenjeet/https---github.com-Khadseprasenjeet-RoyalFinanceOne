import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bankdetails } from 'src/app/class/bankdetails';
import { customerclass } from 'src/app/class/customerclass';
import { Enquiry } from 'src/app/model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
 
 
  createUser(formData: FormData) {
   

return this.http.post("",formData);




  }
  saveProfile(value: Partial<{ firstCtrl: string; }>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  cbl:number;

cus:customerclass={
  id: 0,
  customerName: '',
  pancardNumber: '',
  customerMobileNumber: 0,
  customerAlternateMobileNumber: 0,
  customerEmailId: '',
  customerDateOfBirth: '',
  bankDatails:{
    bankAccountNumber: 0,
    bankName: '',
    branchName: '',
    ifscCode: '',
    cardNumber: 0,
    cibilScore: 0
  } 
}

saveEnquiryData(cs:customerclass){

  return this.http.post("http://localhost:3000/Customer",cs);

}

saveEnquiryData22(){

  this.saveEnquiryData2(this.cus);
}


saveEnquiryData2(cs:customerclass){
  // alert("save data//"+cs.bankDatails.cibilScore+"   "+cs.id)
  // console.log(cs.bankDatails.cibilScore)

  return this.http.put("http://localhost:3000/Customer"+cs.id,cs);


}

getEnquiry(){

  return this.http.get("http://localhost:3000/Customer");
}



  // enq:Enquiry={
  //   enquiryId: 0,
  //   customerName: undefined,
  //   pancardNumber: 0,
  //   customerMobileNumber: 0,
  //   customerAlternateMobileNumber: 0,
  //   customerEmailId: undefined,
  //   customerDateOfBirth: 0
  // }
  // saveEnquiryData(en:Enquiry){

  //   return this.http.post("http://localhost:3000/Enquiry",en);

  // }
  // getEnquiry(){
  //   return this.http.get("http://localhost:3000/Enquiry");
  // }
}
