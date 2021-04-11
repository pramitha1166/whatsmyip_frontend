import { ContactUsComponent } from './ui/page-component/contact-us/contact-us.component';
import { SubnettingComponent } from './ui/page-component/ip_address/subnetting/subnetting.component';
import { HomeComponent } from './ui/page-component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'whatisip/subnetting',
    component: SubnettingComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
