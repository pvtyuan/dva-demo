import request from "../utils/request"

export async function login(body) {
  return request('http://localhost:8000/api/login', {
    method: "POST",
    body: JSON.stringify(body)
  });
}
