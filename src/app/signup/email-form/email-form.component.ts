import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupService } from '../../shared/signup.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm:FormGroup;

  constructor(
    private signupService:SignupService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      'email':new FormControl(this.signupService.signupForm.email, [
        Validators.required,
        Validators.email,
      ])
    })
  }

  navPassword() {
    this.signupService.setSignupField('email', this.emailForm.value.email);
    this.router.navigate(['../password'], {relativeTo:this.route});
  }

  navName() {
    this.signupService.setSignupField('email', this.emailForm.value.email);
    this.router.navigate(['../name'], {relativeTo:this.route});
  }

}
