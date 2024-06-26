import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { FindJobsComponent } from './modules/find-jobs/find-jobs.component';
import { HomeComponent } from './modules/home/home.component';
import { ServicesComponent } from './modules/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'find-jobs', component: FindJobsComponent },
  { path: 'contact-us', component: ContactUsComponent },
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
