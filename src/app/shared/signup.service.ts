import { Signup } from '../signup/signup.model';
import { Subscription } from '../shared/subscription.model';

export class SignupService {
  signupForm:Signup;

  // In a larger project, I would probably just decouple this into its own service.
  subscriptionTypes:Subscription[] = [
    new Subscription(0, 'Basic', 1.99),
    new Subscription(1, 'Mid', 5.99),
    new Subscription(2, 'VIP', 12.99)
  ]

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

  // Return list of subscription types.
  getSubscriptionTypes() {
    return this.subscriptionTypes.slice();
  }
}
