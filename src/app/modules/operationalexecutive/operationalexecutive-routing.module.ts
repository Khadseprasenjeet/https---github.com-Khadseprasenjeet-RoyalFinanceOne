import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckcibilComponent } from './checkcibil/checkcibil.component';
import { VerifydocumentComponent } from './verifydocument/verifydocument.component';
import { ViewAllenquiryComponent } from './view-allenquiry/view-allenquiry.component';

const routes: Routes = [
  {
    path:'check_cibil',component:CheckcibilComponent
  },
  {
    path:'verify_doc',component:VerifydocumentComponent
  },{
    path:'view_all',component:ViewAllenquiryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexecutiveRoutingModule { }
