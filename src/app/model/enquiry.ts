import { CIBILScore } from "./cibilscore";

export class Enquiry {
    enquiryId:number;
      
      customerName:String;
      pancardNumber:number;
      customerMobileNumber:number;
      customerAlternateMobileNumber:number;
      customerEmailId:String;
      customerDateOfBirth:number;
      enquiryStatus:string;
      cibilScore:CIBILScore;
     
}
