import { Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const testRouter = new Router();


import { GetInfoValidator } from './get_info_validator.ts';
import { GetInfoHandler } from './get_info_handler.ts';

export type testgetInfoRequestParamsRequestParams {
  id: string;
}

export interface testgetInfoRequestParamsRequestBody {
  name: string;
  description: string;
}

export interface testgetInfoRequestParamsHandlerResponse {
  statusCode: StatusCodes;
  success: boolean;
  id: string;
}

export interface testgetInfoRequestParamsRequest {
  params: testgetInfoRequestParamsRequestParams; 
  body: testgetInfoRequestParamsRequestBody; 
}

Router.get("/getInfo/:id", 
  async (
    req: testgetInfoRequestParamsRequest, 
    res: Response
  ) => {
    const param: string = req.params.id;
    const body: testgetInfoRequestParamsRequestBody = req.body;
    GetInfoValidator.validate(param, body);
    return GetInfoHandler.getInfo(param, body);
});


