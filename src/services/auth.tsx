import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  const response = await axios
    .post(`${url}`, data)
    .catch((err) => err.response);

  const axiosResponse = response.data;
  if (axiosResponse.error === 1) {
    return axiosResponse;
  }

  return axiosResponse.data;
}
