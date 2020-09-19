import { AbstractMongoDao } from "@daos/MockDb/abstract_mongo_dao";
import NewsletterSubscription, {
  INewsletterSubscription,
} from "@entities/newsletter_subscription";
import { readFileSync } from "fs";
import nodemailer from "nodemailer";
import { pathToFileURL } from "url";
import { getNewsletterEmailLayout } from "./newsletter_email_layout";

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
      const auth = JSON.parse(
        readFileSync(pathToFileURL("creds/newsletter.creds.json"), "utf-8")
      );
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth,
      });
      const emailResult = await transporter.sendMail({
        to: "dominik.reinert.merzig@googlemail.com",
        html: getNewsletterEmailLayout(
          `http://localhost:8080/verify/${result.insertedId}`
        ),
      });
      console.info(`Sent mail with result: ${JSON.stringify(emailResult)}`);
    }
    console.info(`added user with result : ${result}`);
  }

  public async verify(id: string): Promise<void> {
    const toVerify: INewsletterSubscription = await super.find(id);
    if (toVerify.verified) {
      console.info("was already verfied!");
    } else {
      toVerify.verified = true;
      super.updateOne(id, toVerify);
    }
  }

  public async getAll(): Promise<INewsletterSubscription[]> {
    const result = await super.findAll();
    console.info(`getting all users with result : ${result}`);
    return result;
  }
}

export default NewsLetterSubscriptionDao;
