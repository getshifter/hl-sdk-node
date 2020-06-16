import { ShifterClient, DEFAULT_ENDPOINT } from '../src/client';
import { AxiosRequestConfig } from 'axios';

class MockClass extends ShifterClient {
  public getProps() {
    const { resource, token, endpoint } = this;
    return {
      resource,
      token,
      endpoint,
    };
  }

  public getURL(path?: string): string {
    return this.getAPIURL(path);
  }

  public getRequestConfig(conf?: AxiosRequestConfig) {
    return this.createRequestConfig(conf);
  }
}

describe('client.ts', () => {
  describe('| Shifter Client class', () => {
    describe('constructor props', () => {
      it('should set token', () => {
        const c = new MockClass({
          token: 'DUMMY',
        });
        expect(c.getProps().token).toEqual('DUMMY');
      });
      it('should return default api endpoint', () => {
        const c = new MockClass({
          token: 'DUMMY',
        });
        expect(c.getProps().endpoint).toEqual(DEFAULT_ENDPOINT);
      });
      it('should set custom endpoint', () => {
        const c = new MockClass({
          token: 'DUMMY',
          endpoint: 'https://example.com',
        });
        expect(c.getProps().endpoint).toEqual('https://example.com');
      });
      it('should set resource', () => {
        const c = new MockClass({
          token: 'DUMMY',
          resource: 'dummy',
        });
        expect(c.getProps().resource).toEqual('dummy');
      });
    });
    describe('URL generation', () => {
      it('should return callable API URL', () => {
        const c = new MockClass({
          token: 'DUMMY',
        });
        expect(c.getURL()).toEqual('https://api.hl.getshifter.net/');
      });
      it('should return callable API URL with string', () => {
        const c = new MockClass({
          token: 'DUMMY',
        });
        expect(c.getURL('custom')).toEqual(
          'https://api.hl.getshifter.net/custom'
        );
      });
      it('should return callable API URL with dirty string', () => {
        const c = new MockClass({
          token: 'DUMMY',
        });
        expect(c.getURL('/custom//xxx-xxx-xx/')).toEqual(
          'https://api.hl.getshifter.net/custom/xxx-xxx-xx'
        );
      });
    });
  });
  describe('Header and option generation', () => {
    it('should return config with Authorization header', () => {
      const c = new MockClass({
        token: 'DUMMY',
      });
      expect(c.getRequestConfig()).toEqual({
        headers: {
          Authorization: 'DUMMY',
        },
      });
    });
    it('should return config with request body data', () => {
      const c = new MockClass({
        token: 'DUMMY',
      });
      expect(
        c.getRequestConfig({
          data: {
            test: true,
          },
        })
      ).toEqual({
        headers: {
          Authorization: 'DUMMY',
        },
        data: {
          test: true,
        },
      });
    });
  });
});
