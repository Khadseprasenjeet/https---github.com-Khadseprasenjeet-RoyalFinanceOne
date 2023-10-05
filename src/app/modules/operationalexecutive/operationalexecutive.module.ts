import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexecutiveRoutingModule } from './operationalexecutive-routing.module';
import { CheckcibilComponent } from './checkcibil/checkcibil.component';
import { VerifydocumentComponent } from './verifydocument/verifydocument.component';


@NgModule({
  declarations: [
    CheckcibilComponent,
    VerifydocumentComponent
  ],
  imports: [
    CommonModule,
    OperationalexecutiveRoutingModule
  ]
})
export class OperationalexecutiveModule { }
