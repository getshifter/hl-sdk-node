import { ShifterClient, ShifterConfig } from '../client';

import { SiteListItems, SiteItem, SiteCreateOptions, SiteDeleteOptions } from './sites.interface';

export class Sites extends ShifterClient {
  constructor(conf: ShifterConfig) {
    super({
      ...conf,
      resource: 'sites',
    });
  }

  /**
   * List Headless sites
   */
  public async list(): Promise<SiteListItems> {
    return this.get<SiteListItems>();
  }

  /**
   * Retrieve Headless site detail
   * @param siteId
   */
  public async retrieve(siteId: string): Promise<SiteItem> {
    return this.get<SiteItem>(siteId);
  }

  /**
   * Create a new Headless Site
   * @param options 
   */
  public async create(options: SiteCreateOptions): Promise<string> {
      return this.post<SiteCreateOptions, string>('', options)
  }

  /**
   * Delete the Headless Site
   * @param siteId
   * @param options 
   */
  public async del(siteId: string, options?: SiteDeleteOptions): Promise<void> {
    return this.delete<void>(siteId, {
        data: options,
    })
  }
}
