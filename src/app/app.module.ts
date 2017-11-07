import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupService } from './shared/signup.service';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
