import NewsLetterSubscriptionDao from "@daos/newsletter/newsletter_subscription_dao";
import { paramMissingError } from "@shared/constants";
import { Request, Response, Router } from "express";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK,
} from "http-status-codes";

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
  try {
    await newsletterDao.subscribe(email);
  } catch (e) {
    console.log("subscription failed!", e);
    return res.status(INTERNAL_SERVER_ERROR).end();
  }
  return res.status(CREATED).end();
});

router.get("/all", async (req: Request, res: Response) => {
  const subscriptions = await newsletterDao.getAll();
  return res.status(OK).json({ subscriptions });
});

export default router;
