export interface Route {
  name: string;
  endpoints: RouteEndpoint[];
  path?: string;
}

export interface RouteEndpoint {
  eName: string;
  method: string;
  param: string;
  body: RouteBodyMap[];
  response: RouteResponseMap[];
  handler: RouteHandler;
  interfaceName?: string;
}

export interface RouteBodyMap {
  name: string;
  type: string;
}

export interface RouteResponseMap {
  name: string;
  type: string;
}

export interface RouteHandler {
  validation: RouteValidationHandler;
  request: RouteRequestHandler;
}

export interface RouteValidationHandler {
  path: string;
  function: string;
  class?: string;
}

export interface RouteRequestHandler {
  path: string;
  function: string;
  class?: string;
}
