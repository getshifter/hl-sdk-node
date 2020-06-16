import { ShifterClient, ShifterConfig } from '../client';

import { SiteListItems, SiteItem } from './sites.interface';

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
}
