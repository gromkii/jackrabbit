import { Subscription } from '../shared/subscription.model';

export class Signup {
  constructor(
    public name:string,
    public email:string,
    public password:string,
    public subscriptionType:Subscription
  ) { }
}
