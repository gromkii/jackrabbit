import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Signup } from '../signup.model';
import { SignupService } from '../../shared/signup.service';
import { Subscription } from '../../shared/subscription.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm:FormGroup;
  showResetModal:boolean = false;
  showSubmitModal:boolean = false;
  subscriptionTypes:Subscription[] = [];
  currentSubscription:Subscription;

  constructor(
    private signupService:SignupService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscriptionTypes = this.signupService.getSubscriptionTypes();
    this.currentSubscription = this.signupService.getSubscriptionType(0);
    this.initForm();
  }

  setSubscription() {
    this.currentSubscription = this.signupService.getSubscriptionType(this.signupForm.value.subscriptionType);
    console.log(this.signupForm);
  }

  // Abstract form data into proper data model, allows room for additional validation.
  onSubmit() {

    const submitForm:Signup = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      subscriptionType:this.currentSubscription
    }

    // Should we change this to an observer?
    this.signupService.submitSignupForm(submitForm);

    this.router.navigate(['../confirmation'], {relativeTo:this.route});

  }

  // Clear the form, reset button currently uses initForm(), but we want modals.
  onReset() {
    // Popup Modal to confirm reset.
    // If true, initForm(), else hide modal.
  }

  // Initialize the form so that we can use ReactiveForms to control values/whatever.
  initForm() {
    this.signupForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email':new FormControl('', [Validators.email, Validators.required]),
      'password':new FormControl('', Validators.required), //Might add additional validators.
      'subscriptionType':new FormControl(
        0,
        Validators.required
      )
    });
  }

}
