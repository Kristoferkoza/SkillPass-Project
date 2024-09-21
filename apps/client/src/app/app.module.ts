
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user-site/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CompanyComponent } from './company-site/company.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { RouterLink } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SidebarComponent } from './user-dashboard/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CompanyComponent,
    UserLoginComponent,
    UserSignupComponent,
    CompanyLoginComponent,
    UserDashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
