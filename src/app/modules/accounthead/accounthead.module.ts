import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { DisbursementComponent } from './disbursement/disbursement.component';


@NgModule({
  declarations: [
    DisbursementComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule
  ]
})
export class AccountheadModule { }
