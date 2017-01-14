import request from "../utils/request"

export async function login(body) {
  return request('http://localhost:8080/login', {
    method: "POST",
    body: JSON.stringify(body)
  });
}
