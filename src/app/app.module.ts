import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupService } from './shared/signup.service';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NameFormComponent } from './signup/name-form/name-form.component';
import { EmailFormComponent } from './signup/email-form/email-form.component';
import { PasswordFormComponent } from './signup/password-form/password-form.component';
import { SubFormComponent } from './signup/sub-form/sub-form.component';
import { ConfirmFormComponent } from './signup/confirm-form/confirm-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupFormComponent,
    ConfirmationComponent,
    NameFormComponent,
    EmailFormComponent,
    PasswordFormComponent,
    SubFormComponent,
    ConfirmFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
