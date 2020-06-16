import { ShifterClient, ShifterConfig } from '../client';
import { SiteServiceStatus } from './siteServices.interface';

export class SiteServices extends ShifterClient {
  constructor(conf: ShifterConfig) {
    super({
      ...conf,
      resource: 'sites',
    });
  }

  /**
   * Get site service status
   */
  public async retrieve(siteId: string): Promise<SiteServiceStatus> {
    return this.get<SiteServiceStatus>(`${siteId}/services`);
  }

  /**
   * Start WordPress container
   */
  public async start(siteId: string): Promise<void> {
    return this.post<void>(`${siteId}/services`);
  }

  /**
   * Stop WordPress container
   */
  public async stop(siteId: string): Promise<void> {
    return this.delete<void>(`${siteId}/services`);
  }
}
