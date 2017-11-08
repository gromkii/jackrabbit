import { Component, OnInit } from '@angular/core';

import { SignupService } from '../shared/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService) { }

  ngOnInit() {
    this.signupService.resetSignupForm();
  }

}
