import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupService} from '../../shared/signup.service';
import { Signup } from '../../signup/signup.model';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css']
})
export class ConfirmFormComponent implements OnInit {
  signup:Signup;

  constructor(
    private signupService:SignupService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.signup = this.signupService.getSignupForm();

    if (this.signup.name === '') {
      this.router.navigate(['../name'], {relativeTo:this.route});
    }
  }

  onReset() {
    this.signupService.resetSignupForm();
    this.router.navigate(['../name'], {relativeTo:this.route});
  }

  onSubmit() {
    this.router.navigate(['../../confirmation'], {relativeTo:this.route});
  }

  navSubscription() {
    this.router.navigate(['../subscription'], {relativeTo:this.route});
  }

}
