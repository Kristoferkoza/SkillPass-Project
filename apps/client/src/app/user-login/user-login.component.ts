import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  form!: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  goToPreviousSite() {
    this.location.back();
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
  
      this.usersService.findByEmail(email).subscribe({
        next: (user) => {
          console.log("User: ", user.email, user.password)
          console.log("Info: ", email, password)
          if (user && user.password === password) {
            this.router.navigate(['user-dashboard/main-page']);
          } else {
            console.log('Niepoprawne hasło');
          }
        },
        error: (err) => {
          console.log('Użytkownik nie znaleziony');
        }
      });
    }
  }
  
}
