import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { CheckcibilComponent } from './checkcibil/checkcibil.component';

import { ViewAllenquiryComponent } from './view-allenquiry/view-allenquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewApplyloanComponent } from './view-applyloan/view-applyloan.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';


@NgModule({
  declarations: [
    CheckcibilComponent,
    
    ViewAllenquiryComponent,
    ViewApplyloanComponent,
    VerifyDocumentComponent
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class OperationalexecutiveModule { }
