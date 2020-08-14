import { MockDaoMock } from "@daos/MockDb/MockDao.mock";

export interface INewsletterSubscriptionDao {
  subscribe: (email: string) => Promise<void>;
}

class NewsLetterSubscriptionDao extends MockDaoMock
  implements INewsletterSubscriptionDao {
  public async subscribe(email: string): Promise<void> {
    const db = await super.openDb();
    db.newsletter_subscriptions.append({ email, id: Math.random() });
  }
}


export default NewsLetterSubscriptionDao