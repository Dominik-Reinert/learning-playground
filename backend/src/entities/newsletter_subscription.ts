export interface INewsletterSubscription {
  id: number;
  email: string;
}

class NewsletterSubscription implements INewsletterSubscription {
  constructor(public email: string, public id: number = -1) {}
}

export default NewsletterSubscription;
