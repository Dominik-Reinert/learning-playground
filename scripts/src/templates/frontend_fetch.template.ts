import { RouteEndpoint } from "../route";

export function frontendFetchTemplate(
  endpoint: RouteEndpoint,
  routerName: string
): string {
  return `

${endpoint.body ? generateBodyInterface(endpoint) : ""}

${endpoint.response ? generateResponseInterface(endpoint) : ""}
  
export async function fetch${endpoint.interfaceName} (
        ${endpoint.param ? `${endpoint.param}: string,` : ""}
        ${endpoint.body ? `body: ${endpoint.interfaceName}RequestBody,` : ""}
        onSuccess: (${
          endpoint.response
            ? `response: ${endpoint.interfaceName}HandlerResponse`
            : ""
        }) => void,
        onFailed: () => void
    ): Promise<void> {
    const response = await fetch(\`http://localhost:3001/api/${routerName}/${
    endpoint.eName
  }/${endpoint.param ? `:${endpoint.param}` : ""}\`, {
        method: '${endpoint.method}',
        headers: {
            "Content-Type": "application/json",
        },
        ${endpoint.body ? `body: JSON.stringify(${endpoint.param})` : ""}
    });
    if (response.ok) {
        onSuccess(${endpoint.response ? `await response.json()` : ""});
    } else {
        onFailed();
    }
}
    `;
}

function generateBodyInterface(endpoint: RouteEndpoint): string {
  return `
export interface ${endpoint.interfaceName}RequestBody {
    ${endpoint.body.map(({ name, type }) => `${name}: ${type};`).join("\n\t")}
}`;
}

function generateResponseInterface(endpoint: RouteEndpoint): string {
  return `
export interface ${endpoint.interfaceName}HandlerResponse {
    ${endpoint.response
      .map(({ name, type }) => `${name}: ${type};`)
      .join("\n\t")}
}`;
}
