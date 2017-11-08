import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const appRoutes:Routes = [
  { path:'', redirectTo:'/signup', pathMatch: 'full' },
  { path:'signup', component:SignupComponent },
  { path:'confirmation', component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
