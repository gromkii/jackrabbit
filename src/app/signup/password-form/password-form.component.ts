import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupService } from '../../shared/signup.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  passwordForm:FormGroup;

  constructor(
    private signupService:SignupService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    if (this.signupService.signupForm.name === '') {
      this.router.navigate(['../name'], {relativeTo:this.route});
    }

    this.passwordForm = new FormGroup({
      'password':new FormControl(this.signupService.signupForm.password, Validators.required)
    })
  }

  navEmail() {
    this.signupService.setSignupField('password', this.passwordForm.value.password);
    this.router.navigate(['../email'], {relativeTo:this.route});
  }

  navSubscription() {
    this.signupService.setSignupField('password', this.passwordForm.value.password);
    this.router.navigate(['../subscription'], {relativeTo:this.route});
  }

}
