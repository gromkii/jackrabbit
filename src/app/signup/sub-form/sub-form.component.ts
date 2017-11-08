import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SignupService } from '../../shared/signup.service';
import { Subscription } from '../../shared/subscription.model';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.css']
})
export class SubFormComponent implements OnInit {
  subForm:FormGroup;
  subscriptionTypes:Subscription[] = [];

  constructor(
    private signupService:SignupService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.subscriptionTypes = this.signupService.getSubscriptionTypes();

    this.subForm = new FormGroup({
      'subType': new FormControl(0, Validators.required)
    })
  }

  navConfirmation() {
    this.signupService.setSubscription(this.subForm.value.subType)
    this.router.navigate(['../confirmation'], {relativeTo:this.route});
  }

  navPassword() {
    this.signupService.setSubscription(this.subForm.value.subType)
    this.router.navigate(['../password'], {relativeTo:this.route});
  }

}
