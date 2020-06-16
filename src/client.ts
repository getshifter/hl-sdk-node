import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const DEFAULT_ENDPOINT = 'https://api.hl.getshifter.net';

/**
 * Shifter client config
 */
export type ShifterConfig = {
  /**
   * API Token
   */
  token: string;

  /**
   * API endpoint
   */
  endpoint?: string;

  /**
   * Target resource
   */
  resource?: string;
};

export abstract class ShifterClient {
  /**
   * Request Client
   */
  protected readonly client: AxiosInstance = axios;

  /**
   * Shifter API token
   */
  protected readonly token: string;

  /**
   * Shifter API Endpoint
   */
  protected readonly endpoint: string = DEFAULT_ENDPOINT;

  /**
   * API namespace
   */
  protected readonly resource: string = '';

  constructor(conf: ShifterConfig) {
    this.token = conf.token;
    if (conf.endpoint) this.endpoint = conf.endpoint;
    if (conf.resource) this.resource = conf.resource;
  }

  /**
   * Create a Request URL
   * @param path
   */
  protected createURL(path?: string) {
    const apiPath = [this.resource, path]
      .filter(item => !!item)
      .join('/')
      .replace(/\/\//, '/');
    return [this.endpoint, apiPath].join('/');
  }

  /**
   * Get API Request URL
   * @param path
   */
  protected getAPIURL(path?: string): string {
    return this.createURL(path);
  }

  /**
   * Create axios request config object
   * @param config
   */
  protected createRequestConfig(
    config?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const headers = config && config.headers ? config.headers : {};
    headers.Authorization = this.token;
    return Object.assign({}, config, { headers });
  }

  /**
   * Call GET API with token
   * @param path
   * @param config
   */
  protected async get<T = any>(
    path?: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const url = this.getAPIURL(path);
    const conf = this.createRequestConfig(config);
    const result = await this.client.get(url, conf);
    return result.data;
  }

  /**
   * Call POST API with token
   * @param path
   * @param body
   * @param config
   */
  protected async post<Request = any, Response = any>(
    path?: string,
    body?: Request,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const url = this.getAPIURL(path);
    const conf = this.createRequestConfig(config);
    const result = await this.client.post<Response>(url, body, conf);
    return result.data;
  }

  /**
   * Call put API with token
   * @param path
   * @param body
   * @param config
   */
  protected async put<Request = any, Response = any>(
    path?: string,
    body?: Request,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const url = this.getAPIURL(path);
    const conf = this.createRequestConfig(config);
    const result = await this.client.put<Response>(url, body, conf);
    return result.data;
  }

  /**
   * Call DELETE API with token
   * @param path
   * @param config
   */
  protected async delete<Response = any>(
    path?: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const url = this.getAPIURL(path);
    const conf = this.createRequestConfig(config);
    const result = await this.client.delete<Response>(url, conf);
    return result.data;
  }
}
