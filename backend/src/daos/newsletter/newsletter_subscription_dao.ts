import { AbstractMongoDao } from "@daos/MockDb/abstract_mongo_dao";
import NewsletterSubscription, { INewsletterSubscription } from "@entities/newsletter_subscription";

export interface INewsletterSubscriptionDao {
  subscribe: (email: string) => Promise<void>;
}

class NewsLetterSubscriptionDao
  extends AbstractMongoDao<INewsletterSubscription>
  implements INewsletterSubscriptionDao {
  protected collectionName: string = "newsletter";

  public async subscribe(email: string): Promise<void> {
    const result = await super.insertOne(new NewsletterSubscription(email));
    console.info(`added user with result : ${result}`);
  }

  public async getAll(): Promise<INewsletterSubscription[]> {
    const result = await super.findAll();
    console.info(`getting all users with result : ${result}`);
    return result;
  }
}

export default NewsLetterSubscriptionDao;
