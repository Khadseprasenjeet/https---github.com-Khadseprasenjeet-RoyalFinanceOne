import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { EmicalculatorComponent } from 'src/app/includes/emicalculator/emicalculator.component';

const routes: Routes = [
  {
    path:'applyloan',component:ApplyloanComponent
  },
  {
    path:'addenq',component:CreateenquiryComponent
  },
  {path:'viewenq',component:ViewenquiryComponent
  },
  {
    path:'emi_calc',component:EmicalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationshipexecutiveRoutingModule { }
