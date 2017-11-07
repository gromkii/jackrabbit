import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(
    private signupService:SignupService
  ) { }

  ngOnInit() {
    this.subscriptionTypes = this.signupService.getSubscriptionTypes();

    this.initForm();
  }

  // Abstract form data into proper data model, allows room for additional validation.
  onSubmit() {
    const submitForm:Signup = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      subscriptionType:this.signupService.getSubscriptionType(this.signupForm.value.subscriptionType)
    }

    console.log(submitForm);
  }

  // Clear the form, reset button currently uses initForm(), but we want modals.
  onReset() {
    // Popup Modal to confirm reset.
    // If true, initForm(), else hide modal.
  }

  // Initialize the form so that we can use ReactiveForms to control values/whatever.
  initForm() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email':new FormControl(null, [Validators.email, Validators.required]),
      'password':new FormControl(null, Validators.required), //Might add additional validators.
      'subscriptionType':new FormControl(
        this.signupService.getSubscriptionType(0),
        [Validators.required]
      )
    });
  }

}
