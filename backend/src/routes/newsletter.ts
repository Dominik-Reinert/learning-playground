import NewsLetterSubscriptionDao from "@daos/newsletter/newsletter_subscription_dao";
import { paramMissingError } from "@shared/constants";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED } from "http-status-codes";

const router = Router();
const newsletterDao = new NewsLetterSubscriptionDao();

router.post("/subscribe", async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
      input: req.body,
    });
  }
  await newsletterDao.subscribe(email);
  return res.status(CREATED).end();
});

export default router;
