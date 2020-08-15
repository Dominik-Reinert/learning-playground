import { AbstractMongoDao } from "@daos/MockDb/abstract_mongo_dao";
import NewsletterSubscription, { INewsletterSubscription } from "@entities/newsletter_subscription";
import nodemailer from "nodemailer";

export interface INewsletterSubscriptionDao {
  subscribe: (email: string) => Promise<void>;
}

class NewsLetterSubscriptionDao
  extends AbstractMongoDao<INewsletterSubscription>
  implements INewsletterSubscriptionDao {
  protected collectionName: string = "newsletter";

  public async subscribe(email: string): Promise<void> {
    const result = await super.insertOne(new NewsletterSubscription(email));
    if (result.insertedId) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "domis.remote.newsletter@gmail.com",
          pass: "newsletter2020",
        },
      });
      const emailResult = await transporter.sendMail({
        to: "dominik.reinert.merzig@googlemail.com",
      });
      console.info(`Sent mail with result: ${JSON.stringify(emailResult)}`);
    }
    console.info(`added user with result : ${result}`);
  }

  public async getAll(): Promise<INewsletterSubscription[]> {
    const result = await super.findAll();
    console.info(`getting all users with result : ${result}`);
    return result;
  }
}

export default NewsLetterSubscriptionDao;
