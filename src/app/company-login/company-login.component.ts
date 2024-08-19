import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-login.component.html',
  styleUrl: './company-login.component.scss'
})
export class CompanyLoginComponent {
  isSignUp = false;

  toggleMode() {
    this.isSignUp = !this.isSignUp;
  }
}
