import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursementComponent } from './disbursement/disbursement.component';

const routes: Routes = [
  {
    path:'disbursement',component:DisbursementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountheadRoutingModule { }
