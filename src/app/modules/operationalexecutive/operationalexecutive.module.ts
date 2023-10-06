import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { CheckcibilComponent } from './checkcibil/checkcibil.component';
import { VerifydocumentComponent } from './verifydocument/verifydocument.component';
import { ViewAllenquiryComponent } from './view-allenquiry/view-allenquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckcibilComponent,
    VerifydocumentComponent,
    ViewAllenquiryComponent
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class OperationalexecutiveModule { }
