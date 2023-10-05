import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CustomerpersonaldetailsComponent } from './customerpersonaldetails/customerpersonaldetails.component';
import { PreviousloandetailsComponent } from './previousloandetails/previousloandetails.component';

const routes: Routes = [
  {
    path:'bank_details',component:BankdetailsComponent
  },
  {
    path:'custmer_personal_details',component:CustomerpersonaldetailsComponent
  
  },
  {
    path:'previous_loan_details',component:PreviousloandetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
