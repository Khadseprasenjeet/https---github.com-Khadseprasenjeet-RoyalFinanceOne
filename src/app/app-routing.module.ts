import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { AboutUsComponent } from './includes/about-us/about-us.component';
import { EmicalculatorComponent } from './includes/emicalculator/emicalculator.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './entry/login/login.component';
import { ApplicationDashboardComponent } from './entry/application-dashboard/application-dashboard.component';

const routes: Routes = [
  
  { path:'',component:HomeDashboardComponent},
  
      {path:'about',component:AboutUsComponent},
      {path:'emi',component:EmicalculatorComponent},
      {path:'enquiry',component:EnquiryComponent},
      {path:'login',component:LoginComponent},{
        path:'home',component:HomeDashboardComponent
      }
,
  
  {
    path:'application',component:ApplicationDashboardComponent,
    children:[
      {path:'re' , loadChildren:()=>import('src/app/modules/relationshipexecutive/relationshipexecutive.module').then(m=>m.RelationshipexecutiveModule)},
      {path:'admin' , loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule)},
      {path:'cm' , loadChildren:()=>import('src/app/modules/creditmanager/creditmanager.module').then(m=>m.CreditmanagerModule)},
      {path:'ah' , loadChildren:()=>import('src/app/modules/accounthead/accounthead.module').then(m=>m.AccountheadModule)},
      {path:'customer' , loadChildren:()=>import('src/app/modules/customer/customer.module').then(m=>m.CustomerModule)},
      {path:'oe' , loadChildren:()=>import('src/app/modules/operationalexecutive/operationalexecutive.module').then(m=>m.OperationalexecutiveModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
