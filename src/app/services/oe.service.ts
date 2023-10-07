import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { customerclass } from '../class/customerclass';
import { Bankdetails } from '../class/bankdetails';

@Injectable({
  providedIn: 'root'
})
export class OeService {

  constructor() { }

// c:customerclass={
//   customer_id: 0,
//   customerName: '',
//   pancardNumber: '',
//   customerMobileNumber: 0,
//   customerAlternateMobileNumber: 0,
//   customerEmailId: '',
//   customerDateOfBirth: undefined,
//   bankDatails: {
//     bankAccountNumber: 0,
//     bankName: '',
//     branchName: '',
//     ifscCode: '',
//     cardNumber: 0,
//     cibilScore: 0
//   } 
// }


}
