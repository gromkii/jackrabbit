import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupService } from '../../shared/signup.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  nameForm:FormGroup;

  constructor(
    private signupService:SignupService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.nameForm = new FormGroup({
      'name': new FormControl(this.signupService.signupForm.name, Validators.required)
    });
  }

  navEmail() {
    this.signupService.setSignupField('name', this.nameForm.value.name);
    this.router.navigate(['../email'], { relativeTo:this.route })
  }
}
