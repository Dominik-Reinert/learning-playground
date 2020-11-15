
import {
    NewsletterSubscribeRequestParams,
    NewsletterSubscribeRequestBody,
    NewsletterSubscribeHandlerResponse,
  } from "../router/newsletter_router";
  import { StatusCodes } from 'http-status-codes';


export function  handleSubscription(
    param: NewsletterSubscribeRequestParams, 
    body: NewsletterSubscribeRequestBody
): NewsletterSubscribeHandlerResponse {
    throw new Error('handler not implemented!')
}

