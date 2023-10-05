import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  saveEnquiryData(en:Enquiry){

    return this.http.post("http://localhost:3000/Enquiry",en);

  }
}
