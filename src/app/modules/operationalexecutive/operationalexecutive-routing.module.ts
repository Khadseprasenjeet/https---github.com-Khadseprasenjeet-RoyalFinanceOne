import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckcibilComponent } from './checkcibil/checkcibil.component';
import { ViewAllenquiryComponent } from './view-allenquiry/view-allenquiry.component';
import { ViewApplyloanComponent } from './view-applyloan/view-applyloan.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';

const routes: Routes = [
  {
    path:'check_cibil',component:CheckcibilComponent
  },
  {
    path:'view Apply loan',component:ViewApplyloanComponent
  },{
    path:'view_all',component:ViewAllenquiryComponent
  },
  {
    path:'view_document',component:VerifyDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
