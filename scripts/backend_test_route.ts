import { Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const testRouter = new Router();


import { GetInfoValidator } from './get_info_validator.ts';
import { GetInfoHandler } from './get_info_handler.ts';

export type TestGetInfoRequestParams {
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
    const param: string = req.params.id;
    const body: TestGetInfoRequestBody = req.body;
    GetInfoValidator.validate(param, body);
    return GetInfoHandler.getInfo(param, body);
});


