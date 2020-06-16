import { ShifterClient, ShifterConfig } from './client';
import { Sites } from './sites';
import { Login } from './login';
export * from './login';
export * from './sites';

export class Shifter extends ShifterClient {
  /**
   * Site resource client
   */
  public readonly sites: Sites;

  constructor(conf: ShifterConfig) {
    super(conf);
    this.sites = new Sites(conf);
  }

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
}

export default Shifter;
