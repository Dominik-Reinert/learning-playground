export interface TestGetInfoRequestBody {
  name: string;
  description: string;
}

export interface TestGetInfoHandlerResponse {
  success: boolean;
  id: string;
}

export async function fetchTestGetInfo(
        id: string, 
        body: TestGetInfoRequestBody,
        onSuccess: (response: TestGetInfoHandlerResponse) => void,
        onFailed: () => void
    ): Promise<void> {
    const response = await fetch(`http://localhost:3001/api/getInfo/${ id }`, {
        method: 'get',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        onSuccess(await response.json());
    } else {
        onFailed();
    }
}