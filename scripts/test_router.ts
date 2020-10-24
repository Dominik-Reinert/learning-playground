import { Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const testRouter = new Router();


import { GetInfoValidator } from './get_info_validation';
import { GetInfoHandler } from './get_info_handler';

export type TestGetInfoRequestParams = {
  id: string;
}

export interface TestGetInfoRequestBody {
  name: string;
  description: string;
}

export interface TestGetInfoHandlerResponse {
  statusCode: StatusCodes;
  success: boolean;
  id: string;
}

export interface TestGetInfoRequest {
  params: TestGetInfoRequestParams; 
  body: TestGetInfoRequestBody; 
}

Router.get("/getInfo/:id", 
  async (
    req: TestGetInfoRequest, 
    res: Response
  ) => {
    const params = req.params;
    const body: TestGetInfoRequestBody = req.body;
    new GetInfoValidator().validate((params as TestGetInfoRequestParams), body);
    return new GetInfoHandler().getInfo((params as TestGetInfoRequestParams), body);
});


