

import {
  TestGetInfoRequestParams,
  TestGetInfoRequestBody,
  TestGetInfoValidationResult
} from '../router/test_router';
import { StatusCodes } from 'http-status-codes';

export class GetInfoValidator {
    public validate(
        param: TestGetInfoRequestParams, 
        body: TestGetInfoRequestBody
    ): TestGetInfoValidationResult {
        return {
            statusCode: StatusCodes.OK
        }
    };
}

