import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { UserComponent } from './user-site/user.component';
import { CompanyComponent } from './company-site/company.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { MainPageComponent } from './user-dashboard/main-page/main-page.component';
import { NotificationsComponent } from './user-dashboard/notifications/notifications.component';
import { JobSearchComponent } from './user-dashboard/job-search/job-search.component';
import { CvGeneratorComponent } from './user-dashboard/cv-generator/cv-generator.component';
import { SettingsComponent } from './user-dashboard/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'company-login', component: CompanyLoginComponent },
  // { path: 'company-login', component: CompanyLoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'company', component: CompanyComponent },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'main-page', component: MainPageComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'job-search', component: JobSearchComponent },
      { path: 'cv-generator', component: CvGeneratorComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'main-page', pathMatch: 'full' },
      { path: '**', redirectTo: 'main-page' }
    ]
  },
  { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
