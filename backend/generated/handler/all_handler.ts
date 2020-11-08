
import {
  NewsletterAllRequestParams,
  NewsletterAllRequestBody,
  NewsletterAllHandlerResponse,
} from "./newsletter_router";
import { StatusCodes } from 'http-status-codes';

export function getAll(
    param: NewsletterAllRequestParams, 
    body: NewsletterAllRequestBody
): NewsletterAllHandlerResponse {
    throw new Error('handler not implemented!')
}
}
