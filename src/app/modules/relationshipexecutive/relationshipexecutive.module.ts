import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshipexecutiveRoutingModule } from './relationshipexecutive-routing.module';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';


@NgModule({
  declarations: [
    ViewenquiryComponent,
    CreateenquiryComponent,
    ApplyloanComponent
  ],
  imports: [
    CommonModule,
    RelationshipexecutiveRoutingModule
  ]
})
export class RelationshipexecutiveModule { }
