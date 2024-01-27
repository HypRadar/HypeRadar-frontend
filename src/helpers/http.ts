import axios, { AxiosError, AxiosInstance } from "axios";
import { BASE_API_URL, HTTP_STATUS_CODES, JWT_KEY } from "../constants";

class Http {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_API_URL,
    });

    this.client.interceptors.request.use(
      function (config) {
        const jwtToken = localStorage.getItem(JWT_KEY);
        if (jwtToken) {
          config.headers.Authorization = `Bearer ${jwtToken}`;
        }

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        throw returnHttpError(error);
      }
    );
  }

  async get(endpoint: string, params = {}) {
    try {
      const response = await this.client.get(endpoint, { params });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async post(endpoint: string, data = {}, options = {}) {
    try {
      const response = await this.client.post(endpoint, data, options);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async put(endpoint, data = {}) {
    try {
      const response = await this.client.put(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(endpoint: string) {
    try {
      const response = await this.client.delete(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default Http;

export function returnHttpError(err: AxiosError) {
  let errorMsg: string;
  if (err.response) {
    if (err.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
      const apiErrors = err.response.data["error"]["details"];
      const errorKeys = Object.keys(apiErrors);
      errorMsg = apiErrors[errorKeys[0]];

      if (typeof errorMsg !== "string") {
        errorMsg = errorMsg[0];
      }
    } else if (err.response.status === HTTP_STATUS_CODES.UNAUTHORIZED) {
      errorMsg = "Request failed! Please try again";
      localStorage.removeItem(JWT_KEY);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      errorMsg = "Request failed! Please try again";
    }
  } else {
    errorMsg = "Request failed! Please try again";
  }
  return errorMsg;
}
