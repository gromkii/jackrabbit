import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NameFormComponent } from './signup/name-form/name-form.component';
import { EmailFormComponent } from './signup/email-form/email-form.component';
import { PasswordFormComponent } from './signup/password-form/password-form.component';
import { SubFormComponent } from './signup/sub-form/sub-form.component';
import { ConfirmFormComponent } from './signup/confirm-form/confirm-form.component';

const appRoutes:Routes = [
  { path:'', redirectTo:'/signup', pathMatch: 'full' },
  { path:'signup', component:SignupComponent,
    children: [
      { path: '', redirectTo:'name', pathMatch:'full' },
      { path: 'name', component: NameFormComponent },
      { path: 'email', component: EmailFormComponent },
      { path: 'password', component: PasswordFormComponent },
      { path: 'subscription', component: SubFormComponent },
      { path: 'confirmation', component: ConfirmFormComponent }
    ]
  },
  { path:'confirmation', component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
