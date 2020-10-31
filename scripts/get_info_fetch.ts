export interface TestGetInfoRequestBody {
  name: string;
  description: string;
}

export async function fetchTestGetInfo(
        id: string, 
        body: TestGetInfoRequestBody
    ) {
    const response = await fetch(`http://localhost:3001/api/getInfo/${ id }`, {
        method: 'get',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    return response.json();
}