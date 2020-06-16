import axios, {
  AxiosInstance,
} from 'axios'
import {
  DEFAULT_ENDPOINT,
} from './client'


export class Login {
    /**
     * Request Client
     */
    protected readonly client: AxiosInstance = axios;
  
    /**
     * Shifter API Endpoint
     */
    protected readonly endpoint: string = DEFAULT_ENDPOINT;

    constructor(conf?: {
      endpoint?: string;
    }) {
      if (conf && conf.endpoint) this.endpoint = conf.endpoint;
    }

    public async login(username: string, password: string) {
        const result = await this.client.post(`${this.endpoint}/login`, {
          username,
          password,
        })
        return result.data
    }
}