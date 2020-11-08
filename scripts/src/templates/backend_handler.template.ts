import { RouteEndpoint } from "../route";

export function backendHandlerTemplate(
  endpoint: RouteEndpoint,
  routePath: string
) {
  const isClassType = endpoint.handler.request.class !== undefined;
  return `
import {
    ${endpoint.interfaceName}RequestParams,
    ${endpoint.interfaceName}RequestBody,
    ${endpoint.interfaceName}HandlerResponse,
  } from "${routePath}";
  import { StatusCodes } from 'http-status-codes';

${
  isClassType
    ? `
export class ${endpoint.handler.request.class} {
    public ${endpoint.handler.request.function}(
        param: ${endpoint.interfaceName}RequestParams, 
        body: ${endpoint.interfaceName}RequestBody
    ): ${endpoint.interfaceName}HandlerResponse {
        throw new Error('handler not implemented!');
    }
}
`
    : `
export function  ${endpoint.handler.request.function}(
    param: ${endpoint.interfaceName}RequestParams, 
    body: ${endpoint.interfaceName}RequestBody
): ${endpoint.interfaceName}HandlerResponse {
    throw new Error('handler not implemented!')
}
`
}
`;
}
