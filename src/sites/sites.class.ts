import { ShifterClient, ShifterConfig } from '../client';

import {
  SiteListItems,
  SiteItem,
  SiteCreateOptions,
  SiteDeleteOptions,
  SiteUpdateNameOptions,
} from './sites.interface';

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
   * Create a new Headless Site
   * @param options
   */
  public async create(options: SiteCreateOptions): Promise<string> {
    return this.post<SiteCreateOptions, string>('', options);
  }


  /**
   * Retrieve Headless site detail
   * @param siteId
   */
  public async retrieve(siteId: string): Promise<SiteItem> {
    return this.get<SiteItem>(siteId);
  }

  /**
   * Delete the Headless Site
   * @param siteId
   * @param options
   */
  public async del(siteId: string, options?: SiteDeleteOptions): Promise<void> {
    return this.delete<void>(siteId, {
      data: options,
    });
  }

  /**
   * Update the site name
   * @param siteId 
   */
  public async updateName(siteId: string, siteName: string): Promise<void> {
      return this.put<SiteUpdateNameOptions,void>(siteId, {
          site_name: siteName
      })
  }

  /**
   * Get initial login password 
   * @param siteId 
   */
  public async getInitialWPPassword(siteId: string): Promise<string> {
      return this.get<string>(`${siteId}/wp/initial_password`)
  }

  /**
   * Retry setup the WordPress
   * @param siteId 
   */
  public async retrySetup(siteId: string): Promise<string> {
      return this.put<string>(`${siteId}/retry_setup`)
  }
}
