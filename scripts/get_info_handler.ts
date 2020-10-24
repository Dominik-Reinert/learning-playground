
import {
  TestGetInfoRequestParams,
  TestGetInfoRequestBody,
  TestGetInfoHandlerResponse,
} from "./test_router";

export class GetInfoHandler {
    public getInfo(
        param: TestGetInfoRequestParams, 
        body: TestGetInfoRequestBody
    ): TestGetInfoHandlerResponse {
        return undefined;
    }
}

