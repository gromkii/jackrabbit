import { Signup } from '../signup/signup.model';
import { Subscription } from '../shared/subscription.model';

export class SignupService {
  // In a larger project, I would probably just decouple this into its own service.
  subscriptionTypes:Subscription[] = [
    new Subscription(0, 'Basic', 1.99),
    new Subscription(1, 'Mid', 5.99),
    new Subscription(2, 'VIP', 12.99)
  ]

  // Set up default values in case of weirdness.
  signupForm:Signup = new Signup('', '', '', this.subscriptionTypes[0]);

  // Store values from signup form into service.
  submitSignupForm(signup:Signup) {
    this.signupForm = {
      name:signup.name,
      email:signup.email,
      password:signup.password,
      subscriptionType:signup.subscriptionType
    }
  }

  // Reset stored service values.
  resetSignupForm() {
    this.signupForm = {
      name:'',
      email:'',
      password:'',
      subscriptionType:null
    }
  }

  getSignupForm() {
    return this.signupForm;
  }

  // Return list of subscription types.
  getSubscriptionTypes() {
    return this.subscriptionTypes.slice();
  }

  getSubscriptionType(index:number) {
    return this.subscriptionTypes[index];
  }

  setSignupField(field:string, value:string) {
    this.signupForm[field] = value;
  }

  setSubscription(index:number) {
    this.signupForm.subscriptionType = this.subscriptionTypes[index];
  }
}
