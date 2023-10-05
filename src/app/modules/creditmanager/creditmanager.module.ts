import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CustomerpersonaldetailsComponent } from './customerpersonaldetails/customerpersonaldetails.component';
import { PreviousloandetailsComponent } from './previousloandetails/previousloandetails.component';


@NgModule({
  declarations: [
    BankdetailsComponent,
    CustomerpersonaldetailsComponent,
    PreviousloandetailsComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }
