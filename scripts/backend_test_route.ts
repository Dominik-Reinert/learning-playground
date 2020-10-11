import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const testRouter = new Router();


export interface testGetInfoRequestParams {
  id: string;
}

export interface testGetInfoRequestBody {
  name: string;
  description: string;
}

export interface testGetInfoRequest {
  params: IdRequestParams; 
  body: GetInfoRequestBody; 
}

Router.get("/getInfo/:id",
async (req: testGetInfoRequest, res: Response) => {
  const param: IdRequestParams = req.params.id;
});
