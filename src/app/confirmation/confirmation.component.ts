import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupService } from '../shared/signup.service';
import { Signup } from '../signup/signup.model';
import { Subscription } from '../shared/subscription.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  signup:Signup;

  constructor(
    private signupService:SignupService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.signup = this.signupService.getSignupForm();
    if (this. signup.name === '') {
      this.router.navigate(['/signup'], {relativeTo:this.route});
    } else {

    }


  }

}
