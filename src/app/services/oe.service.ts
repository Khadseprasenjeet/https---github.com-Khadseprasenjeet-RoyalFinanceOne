import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { customerclass } from '../class/customerclass';
import { Bankdetails } from '../class/bankdetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OeService {

  constructor(private http:HttpClient) { }

c:customerclass={
  id: 0,
  customerName: '',
  pancardNumber: '',
  customerMobileNumber: 0,
  customerAlternateMobileNumber: 0,
  customerEmailId: '',
  customerDateOfBirth: undefined,
  bankDatail: {
    bankAccountNumber: 0,
    bankName: '',
    branchName: '',
    ifscCode: '',
    cardNumber: 0,
    cibilScore: 0,
    id: 0,
    cibilStatus: ''
  }
  }

  getEnqury(){
    return this.http.get("http://localhost:9091/getCustomer");
  }

  updatEnquiry(c:customerclass){
  return this.http.put("http://localhost:9091/getCibilScore/"+c.id,c)
  }


}
