import {
  alreadyVerifiedError,
  notFoundError,
  paramMissingError,
  verificationFailedError,
} from "@shared/constants";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import NewsLetterSubscriptionDao from "@daos/newsletter/newsletter_subscription_dao";

const router = Router();

const newsletterDao = new NewsLetterSubscriptionDao()

router.post("/subscribe", async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: paramMissingError,
      input: req.body,
    });
  }
  try {
    await newsletterDao.subscribe(email);
  } catch (e) {
    console.log("subscription failed!", e);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
  return res.status(StatusCodes.CREATED).end();
});

router.post("/verify/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: paramMissingError,
      input: req.body,
    });
  }
  try {
    const verficationResult = await newsletterDao.verify(id);

    if (verficationResult.alreadyVerified) {
      res
        .status(StatusCodes.CONFLICT)
        .json({
          error: alreadyVerifiedError,
          body: { error: alreadyVerifiedError },
        })
        .end();
    } else if (verficationResult.notFound) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({
          error: notFoundError,
          body: { error: notFoundError },
        })
        .end();
    }
  } catch (e) {
    console.log("verfication failed!", e);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        error: verificationFailedError,
        body: { error: verificationFailedError },
      })
      .end();
  }
  return res.status(StatusCodes.OK).end();
});

router.get("/all", async (req: Request, res: Response) => {
  try {
    const subscriptions = await newsletterDao.getAll();
    return res.status(StatusCodes.OK).json({ subscriptions });
  } catch (e) {
    console.error(e);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
});

export default router;
