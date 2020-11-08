

import {
  NewsletterAllRequestParams,
  NewsletterAllRequestBody,
  NewsletterAllValidationResult
} from '../router/newsletter_router';
import { StatusCodes } from 'http-status-codes';

export function (
    param: NewsletterAllRequestParams, 
    body: NewsletterAllRequestBody
): NewsletterAllValidationResult {
    return {
        statusCode: StatusCodes.OK
    };
}
}
