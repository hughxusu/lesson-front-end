enum Status {
  Success = 200,
  Created = 201,
  NotFound = 404,
  ServerError = 500,
}

interface Response {
  status: Status;
  data?: any;
}

function handleResponse(response: Response) {
  switch (response.status) {
    case Status.Success:
      return { success: response.data };
    case Status.Created:
      return { message: 'created' };
    case Status.NotFound:
      return { message: 'not found' };
    case Status.ServerError:
      return { message: 'server error' };
    default:
      return { message: 'unknown error' };
  }
}

let response: Response = { status: 404 };
console.log(handleResponse(response));
