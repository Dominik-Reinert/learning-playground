
import {
  TestGetInfoRequestParams,
  TestGetInfoRequestBody,
  TestGetInfoHandlerResponse,
} from "./backend_test_route";

export class GetInfoHandler {
    public (
        param: TestGetInfoRequestParams, 
        body: TestGetInfoRequestBody
    ): TestGetInfoHandlerResponse {
        return undefined;
    }
}


