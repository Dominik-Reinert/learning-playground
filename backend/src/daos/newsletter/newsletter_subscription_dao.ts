import { AbstractDao } from "@daos/abstract_dao";
import NewsletterSubscription, {
  INewsletterSubscription,
} from "@entities/newsletter_subscription";
import { readFileSync } from "fs";
import nodemailer from "nodemailer";
import { pathToFileURL } from "url";
import { getNewsletterEmailLayout } from "./newsletter_email_layout";

export interface VerificationResult {
  notFound?: boolean;
  alreadyVerified?: boolean;
}

export interface INewsletterSubscriptionDao {
  subscribe: (email: string) => Promise<void>;
}

class NewsLetterSubscriptionDao
  extends AbstractDao<INewsletterSubscription>
  implements INewsletterSubscriptionDao {
  protected collectionName: string = "newsletter";
  protected readonly tableName: string = "newsletter_subscriptions";

  public async subscribe(email: string): Promise<void> {
    const newsletterSubscription = new NewsletterSubscription(email);
    const insertionResults = await super.insertOne(newsletterSubscription);
    if (insertionResults?.affectedRows === 1) {
      const result = await super.findByAnd(newsletterSubscription);
      if (result?.[0].hashId) {
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
            `http://localhost:8080/verify/${result?.[0].hashId}`
          ),
        });
        console.info(`Sent mail with result: ${JSON.stringify(emailResult)}`);
      }
      console.info(`added user with result : ${result}`);
    }
  }

  public async verify(id: string): Promise<VerificationResult> {
    try {
      const toVerify: INewsletterSubscription = await super.find(id);
      if (toVerify === undefined) {
        return { notFound: true };
      }
      if (toVerify.verified) {
        return { alreadyVerified: true };
      } else {
        toVerify.verified = true;
        super.updateOne(id, toVerify);
        return {};
      }
    } catch (e) {
      console.error(e);
      return {};
    }
  }

  public async getAll(): Promise<INewsletterSubscription[]> {
    const result = await super.findAll();
    console.info(`getting all users with result : ${result}`);
    return result;
  }
}

export default NewsLetterSubscriptionDao;
