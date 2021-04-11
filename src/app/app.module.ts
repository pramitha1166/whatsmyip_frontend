import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './ui/common-component/navigation/navigation.component';
import { FooterComponent } from './ui/common-component/footer/footer.component';
import { HomeComponent } from './ui/page-component/home/home.component';
import { IpAddressMainComponent } from './ui/page-component/ip_address/ip-address-main/ip-address-main.component';
import { SubnettingComponent } from './ui/page-component/ip_address/subnetting/subnetting.component';
import { VpnComponent } from './ui/page-component/ip_address/vpn/vpn.component';
import { AboutUsComponent } from './ui/page-component/about-us/about-us.component';
import { TermConditionsComponent } from './ui/page-component/term-conditions/term-conditions.component';
import { PrivacyPolicyComponent } from './ui/page-component/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './ui/page-component/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    IpAddressMainComponent,
    SubnettingComponent,
    VpnComponent,
    AboutUsComponent,
    TermConditionsComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
