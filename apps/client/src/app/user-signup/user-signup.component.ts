import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CreateUser } from '../_models/users/create-user.model';
import { UsersService } from '../_services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss'
})
export class UserSignupComponent {
  nameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  repeatPasswordControl = new FormControl('', [Validators.required]);

  form!: FormGroup;

  MatchingPasswordValidator = (control: AbstractControl) => {
    const password = this.passwordControl;
    const repeatPassword = this.repeatPasswordControl;

    if (
      repeatPassword.errors &&
      !repeatPassword.errors['matchingPasswordValidator']
    ) {
      return;
    }

    if (password.value !== repeatPassword.value) {
      repeatPassword.setErrors({ matchingPasswordValidator: true });
    } else {
      repeatPassword.setErrors(null);
    }
  };

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: this.nameControl,
        email: this.emailControl,
        password: this.passwordControl,
        repeatPassword: this.repeatPasswordControl,
      },
      {
        validators: [this.MatchingPasswordValidator],
      } as AbstractControlOptions
    );
  }

  goToPreviousSite() {
    this.location.back();
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const { name, email, password } = this.form.value;

    const newUser: CreateUser = {
      name: name!,
      email: email!,
      password: password!
    };

    console.log(newUser)
    this.usersService.create(newUser).subscribe({
      next: () => {
        console.log("Konto utworzone")
        this.router.navigate(['user-dashboard/main-page']);
      },
      error: (error) => {
        console.log("Wystąpił błąd: ", error)
      },
    })
  }
}
