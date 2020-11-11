import { Route, RouteEndpoint } from "../route";

export function backendRouterTemplate(endpoint: Route): string {
  return `
${addImports()}

const ${endpoint.name}Router = new Router();

${endpoint.endpoints.map((e) => {
  return `
import { ${
    e.handler.validation.class
      ? `${e.handler.validation.class}`
      : `${e.handler.validation.function}`
  } } from '../validation/${e.handler.validation.path}';
import { ${
    e.handler.request.class
      ? `${e.handler.request.class}`
      : `${e.handler.request.function}`
  } } from '../handler/${e.handler.request.path}';

export type ${e.interfaceName}RequestParams = {
    ${e.param ? `${e.param}: string;` : ""}
}

export interface ${e.interfaceName}RequestBody {
    ${e.body?.map((b) => `${b.name}: ${b.type};\n`)}
}

export interface ${e.interfaceName}HandlerResponse {
    statusCode: StatusCodes;
    ${e.response?.map((r) => `${r.name}: ${r.type};\n`)}
}

export interface ${e.interfaceName}ValidationResult {
    statusCode: StatusCodes;
    jsonResponse?: {
        error: string;
    };
}

export interface ${e.interfaceName}Request {
    params: ${e.interfaceName}RequestParams;
    body: ${e.interfaceName}RequestBody;
}

${endpoint.name}Router.${e.method}("/${e.eName}${
    e.param ? `/:${e.param}` : ""
  }", 
    async (
    req: ${e.interfaceName}Request, 
    res: Response
    ) => {
    const params: ${e.interfaceName}RequestParams = req.params;
    const body: ${e.interfaceName}RequestBody = req.body;
    ${
      e.handler.validation
        ? `
        ${
          e.handler.validation.class
            ? `
        const validationResult = new ${e.handler.validation.class}().${e.handler.validation.function}(params, body);
        `
            : `
        const validationResult = ${e.handler.validation.function}(params, body);
        `
        }
    if (validationResult.statusCode !== StatusCodes.OK) {
        res.status(validationResult.statusCode).json(validationResult.jsonResponse);
    } else {
        `
        : ""
    }
    ${
      e.handler.request.class
        ? `const { statusCode, ...jsonResponse } = new ${e.handler.request.class}().${e.handler.request.function}(params, body);`
        : `const { statusCode, ...jsonResponse } = ${e.handler.request.function}(params, body);`
    }
        res.status(statusCode).json(jsonResponse);
    }
    return res;
});

`;
})}
`;
}

function addImports(): string {
  return `
import { Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
`;
}

function generateEndpointCode(endpoint: RouteEndpoint): string {
  return `
    
`;
}
