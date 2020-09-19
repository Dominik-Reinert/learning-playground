export interface INewsletterSubscription {
  id?: string;
  email: string;
  verified: boolean
}

class NewsletterSubscription implements INewsletterSubscription {
  constructor(public email: string, public verified: boolean = false) {}
}

export default NewsletterSubscription;
