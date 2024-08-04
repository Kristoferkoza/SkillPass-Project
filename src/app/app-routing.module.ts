import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { UserComponent } from './user-site/user/user.component';
import { CompanyComponent } from './company-site/company/company.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'company-login', component: CompanyLoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'company', component: CompanyComponent },
  { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
