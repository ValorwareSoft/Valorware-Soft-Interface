import { NgModule } from '@angular/core';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { FindJobsComponent } from './modules/find-jobs/find-jobs.component';
import { HomeComponent } from './modules/home/home.component';
import { ServicesComponent } from './modules/services/services.component';
import { ViewJobComponent } from './modules/view-job/view-job.component';
import { Routes, ExtraOptions, RouterModule } from '@angular/router';
import { ValorwaresoftSuperadminComponent } from './modules/valorwaresoft-superadmin/valorwaresoft-superadmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'find-jobs', component: FindJobsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path : 'apply/:cardNumber', component : ViewJobComponent},
  {path : 'valorwaresoft-superadmin', component : ValorwaresoftSuperadminComponent}
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', 
  anchorScrolling: 'enabled', 
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
