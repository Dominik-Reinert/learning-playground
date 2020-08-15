export interface INewsletterSubscription {
  id?: string;
  email: string;
}

class NewsletterSubscription implements INewsletterSubscription {
  constructor(public email: string) {}
}

export default NewsletterSubscription;
