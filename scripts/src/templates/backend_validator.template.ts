import { Route } from "../route";

export function backendValidatorTemplate(routepath: string, endpoint: Route): string {
  return `
${endpoint.endpoints.forEach((e) => {
  return `
import {
    ${e.interfaceName}RequestParams,
    ${e.interfaceName}RequestBody,
    ${e.interfaceName}ValidationResult
} from '${routepath}';
import { StatusCodes } from 'http-status-codes';
  
${
  e.handler.validation.class
    ? `export class ${e.handler.validation.class} {
      public ${e.handler.validation.function}(
          param: ${e.interfaceName}RequestParams, 
          body: ${e.interfaceName}RequestBody
      ): ${e.interfaceName}ValidationResult {
          return {
              statusCode: StatusCodes.OK
          }
      };
  }`
    : `export function ${e.handler.validation.function}(
      param: ${e.interfaceName}RequestParams, 
      body: ${e.interfaceName}RequestBody
  ): ${e.interfaceName}ValidationResult {
      return {
          statusCode: StatusCodes.OK
      };
  }`
}`;
})}
`;
}
