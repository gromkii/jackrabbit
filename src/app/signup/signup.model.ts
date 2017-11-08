import { Subscription } from '../shared/subscription.model';

export class Signup {
  constructor(
    public name:string,
    public email:string,
    public password:string,
    public subscriptionType:Subscription
  ) {
    this.name = '';
    this.email = '';
    this.password = '';
    this.subscriptionType = new Subscription(0,'Basic',1.99);
  }
}
