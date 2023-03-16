import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string, contentType = 'application/json') {

    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': contentType,
      },
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this.responseSuccess);
  };

  private responseSuccess = (response: AxiosResponse) => response;
}

export default HttpClient;
