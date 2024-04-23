import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  const response = await axios.post(`${url}`, data);
  const axiosResponse = response.data;

  return axiosResponse.data;
}
