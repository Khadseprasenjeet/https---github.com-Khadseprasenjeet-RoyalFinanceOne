import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshipexecutiveRoutingModule } from './relationshipexecutive-routing.module';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewenquiryComponent,
    CreateenquiryComponent,
    
  ],
  imports: [
    CommonModule,
    RelationshipexecutiveRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class RelationshipexecutiveModule { }
