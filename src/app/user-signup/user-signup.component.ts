import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss'
})
export class UserSignupComponent {
  registerForm: FormGroup;

  nameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  repeatPasswordControl = new FormControl('', [Validators.required]);

  constructor(private location: Location) {
    this.registerForm = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
      password: this.passwordControl,
      repeatPassword: this.repeatPasswordControl,
    });
  }

  goToPreviousSite() {
    this.location.back();
  }

  onSubmit() {
    console.log("Zapisz")
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
