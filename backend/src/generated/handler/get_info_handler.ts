
import {
  TestGetInfoRequestParams,
  TestGetInfoRequestBody,
  TestGetInfoHandlerResponse,
} from "../router/test_router";
import { StatusCodes } from 'http-status-codes';

export class GetInfoHandler {
    public getInfo(
        param: TestGetInfoRequestParams, 
        body: TestGetInfoRequestBody
    ): TestGetInfoHandlerResponse {
        throw new Error('handler not implemented!')
    }
}

