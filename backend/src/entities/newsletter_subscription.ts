export interface INewsletterSubscription {
  id: number;
  email: string;
}

class NewsletterSubscription implements INewsletterSubscription {
  constructor(public email: string, public id: number) {}
}

export default NewsletterSubscription;
