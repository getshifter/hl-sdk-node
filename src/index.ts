import { ShifterClient, ShifterConfig } from './client';
import { Sites } from './sites';
import { Login } from './login';
import { SiteServices } from './siteServices';
import { getToken } from './oauth'
export * from './login';
export * from './sites';
export * from './siteServices';
export * from './oauth';

/**
 * Shifter Headless API Client
 * @example
 * ```typescript
 * const shifter = new Shifter({
 *    token: "SHIFTER_AUTH_TOKEN"
 * })
 * shifter.sites.lists()
 *  .then(data => console.log(data))
 * ```
 */
export class Shifter extends ShifterClient {
  /**
   * Site resource client
   */
  public readonly sites: Sites;

  /**
   *
   * SiteService resource client
   */
  public readonly siteServices: SiteServices;

  constructor(conf: ShifterConfig) {
    super(conf);
    this.sites = new Sites(conf);
    this.siteServices = new SiteServices(conf);
  }

  /**
   * Create client with login by username and password
   * @param username
   * @param password
   * @param options
   * @example
   * ```typescript
   * Shifter.setupWithLogin('USERNAME', 'PASSWORD')
   *   .then(client => {
   *      client.sites.lists()
   *        .then(data => console.log(data))
   *   })
   *
   * ```
   */
  public static async setupWithLogin(
    username: string,
    password: string,
    options?: {
      endpoint?: string;
    }
  ) {
    const client = new Login(options);
    const { AccessToken } = await client.login(username, password);
    return new Shifter({
      ...options,
      token: AccessToken,
    });
  }

  public static async setupWithOAuth() {
    const tokens = await getToken()
    console.log(tokens)
    if (tokens.access_token) {
      return new Shifter({
        token: tokens.access_token
      })
    } else {
      return null
    }
  }
}

export default Shifter;
