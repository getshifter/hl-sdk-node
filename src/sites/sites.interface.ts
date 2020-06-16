export interface SiteListItem {
  /**
   * Site ID',
   */
  ID: string;

  /**
   * Site owner name',
   */
  site_owner: string;

  /**
   * The name of the site',
   */
  site_name: string;

  /**
   * Subscribing plan id',
   */
  plan_id: string;

  /**
   * Subscription id',
   */
  subscription_id?: string;

  /**
   * The time of created the site',
   */
  create_time: string;

  /**
   * WordPress site URL',
   */
  wp_url: string;

  /**
   * CloudFront Domain',
   */
  cf_domain: string;

  /**
   * service status
   **/
  service_state: string;

  /**
   * Trial site flag
   **/
  is_trial: boolean;
}

/**
 * Site List items
 */
export type SiteListItems = Array<SiteListItem>

/**
 * Retrieve Site item
 */
export interface SiteItem extends SiteListItem {
  container_status: string;
  container_service_status: string;
}