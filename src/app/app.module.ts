import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { ApplicationDashboardComponent } from './entry/application-dashboard/application-dashboard.component';
import { LoginComponent } from './entry/login/login.component';
import { AboutUsComponent } from './includes/about-us/about-us.component';
import { EmicalculatorComponent } from './includes/emicalculator/emicalculator.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { FooterComponent } from './templates/footer/footer.component';
import { MenuComponent } from './templates/menu/menu.component';
import { UsertypePipe } from './pipes/usertype.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './templates/app-header/app-header.component';
import { HomeHeaderComponent } from './templates/home-header/home-header.component';
import { LocateComponent } from './includes/locate/locate.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    ApplicationDashboardComponent,
    LoginComponent,
    AboutUsComponent,
    EmicalculatorComponent,
    EnquiryComponent,
    FooterComponent,
    MenuComponent,
    UsertypePipe,
    AppHeaderComponent,
    HomeHeaderComponent,
    LocateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
   


  ],
  exports: [
    AppComponent,
    HomeDashboardComponent,
    ApplicationDashboardComponent,
    LoginComponent,
    AboutUsComponent,
    EmicalculatorComponent,
    EnquiryComponent,
    FooterComponent,
    MenuComponent,
    UsertypePipe,
    AppHeaderComponent,
    HomeHeaderComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
