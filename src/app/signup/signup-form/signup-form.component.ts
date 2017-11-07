import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SignupService } from '../../shared/signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm:FormGroup;
  showResetModal:boolean = false;
  showSubmitModal:boolean = false;

  constructor(
    private signupService:SignupService
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'email':new FormControl(null, Validators.email),
      'password':new FormControl(null)
    });
  }

  onSubmit() {
    
  }

  onReset() {
    // Popup Modal to confirm reset.
    // If true, initForm(), else hide modal.
  }

  initForm() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'email':new FormControl(null, Validators.email),
      'password':new FormControl(null)
    });
  }

}
