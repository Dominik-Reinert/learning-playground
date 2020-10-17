export interface Route {
  name: string;
}

export interface RouteEndpoint {
  eName: string;
  method: string;
  param: string;
  body: RouteBodyMap;
  response: RouteResponseMap;
  handler: RouteHandler;
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
