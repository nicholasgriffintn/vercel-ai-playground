export const events = [
  {
    name: '$pageview',
    properties: [
      { name: 'timestamp', type: 'string' },
      { name: '$os', type: 'string' },
      { name: '$browser', type: 'string' },
      { name: '$device_type', type: 'string' },
      { name: '$current_url', type: 'string' },
      { name: '$host', type: 'string' },
      { name: '$pathname', type: 'string' },
      { name: '$browser_version', type: 'number' },
      { name: '$screen_height', type: 'number' },
      { name: '$screen_width', type: 'number' },
      { name: '$viewport_height', type: 'number' },
      { name: '$viewport_width', type: 'number' },
      { name: '$lib', type: 'string' },
      { name: '$lib_version', type: 'string' },
      { name: '$insert_id', type: 'string' },
      { name: '$time', type: 'number' },
      { name: 'distinct_id', type: 'string' },
      { name: '$device_id', type: 'string' },
      { name: '$initial_referrer', type: 'string' },
      { name: '$initial_referring_domain', type: 'string' },
      { name: '$referrer', type: 'string' },
      { name: '$referring_domain', type: 'string' },
      { name: '$active_feature_flags', type: 'array' },
      { name: '$event_type', type: 'string' },
      { name: '$ce_version', type: 'number' },
      { name: 'token', type: 'string' },
      { name: '$session_id', type: 'string' },
      { name: '$window_id', type: 'string' },
      { name: '$geoip_city_name', type: 'string' },
      { name: '$geoip_country_name', type: 'string' },
      { name: '$geoip_country_code', type: 'string' },
      { name: '$geoip_continent_name', type: 'string' },
      { name: '$geoip_continent_code', type: 'string' },
      { name: '$geoip_latitude', type: 'number' },
      { name: '$geoip_longitude', type: 'number' },
      { name: '$geoip_time_zone', type: 'string' },
      { name: '$geoip_subdivision_1_code', type: 'string' },
      { name: '$geoip_subdivision_1_name', type: 'string' },
      { name: '$ip', type: 'string' },
    ],
  },
  {
    name: '$pageleave',
    properties: [
      { name: 'timestamp', type: 'string' },
      { name: '$os', type: 'string' },
      { name: '$browser', type: 'string' },
      { name: '$device_type', type: 'string' },
      { name: '$current_url', type: 'string' },
      { name: '$host', type: 'string' },
      { name: '$pathname', type: 'string' },
      { name: '$browser_version', type: 'number' },
      { name: '$screen_height', type: 'number' },
      { name: '$screen_width', type: 'number' },
      { name: '$viewport_height', type: 'number' },
      { name: '$viewport_width', type: 'number' },
      { name: '$lib', type: 'string' },
      { name: '$lib_version', type: 'string' },
      { name: '$insert_id', type: 'string' },
      { name: '$time', type: 'number' },
      { name: 'distinct_id', type: 'string' },
      { name: '$device_id', type: 'string' },
      { name: '$initial_referrer', type: 'string' },
      { name: '$initial_referring_domain', type: 'string' },
      { name: '$referrer', type: 'string' },
      { name: '$referring_domain', type: 'string' },
      { name: '$active_feature_flags', type: 'array' },
      { name: '$event_type', type: 'string' },
      { name: '$ce_version', type: 'number' },
      { name: 'token', type: 'string' },
      { name: '$session_id', type: 'string' },
      { name: '$window_id', type: 'string' },
      { name: '$geoip_city_name', type: 'string' },
      { name: '$geoip_country_name', type: 'string' },
      { name: '$geoip_country_code', type: 'string' },
      { name: '$geoip_continent_name', type: 'string' },
      { name: '$geoip_continent_code', type: 'string' },
      { name: '$geoip_latitude', type: 'number' },
      { name: '$geoip_longitude', type: 'number' },
      { name: '$geoip_time_zone', type: 'string' },
      { name: '$geoip_subdivision_1_code', type: 'string' },
      { name: '$geoip_subdivision_1_name', type: 'string' },
      { name: '$ip', type: 'string' },
    ],
  },
  {
    name: '$autocapture',
    properties: [
      { name: 'timestamp', type: 'string' },
      { name: '$os', type: 'string' },
      { name: '$browser', type: 'string' },
      { name: '$device_type', type: 'string' },
      { name: '$current_url', type: 'string' },
      { name: '$host', type: 'string' },
      { name: '$pathname', type: 'string' },
      { name: '$browser_version', type: 'number' },
      { name: '$screen_height', type: 'number' },
      { name: '$screen_width', type: 'number' },
      { name: '$viewport_height', type: 'number' },
      { name: '$viewport_width', type: 'number' },
      { name: '$lib', type: 'string' },
      { name: '$lib_version', type: 'string' },
      { name: '$insert_id', type: 'string' },
      { name: '$time', type: 'number' },
      { name: 'distinct_id', type: 'string' },
      { name: '$device_id', type: 'string' },
      { name: '$initial_referrer', type: 'string' },
      { name: '$initial_referring_domain', type: 'string' },
      { name: '$referrer', type: 'string' },
      { name: '$referring_domain', type: 'string' },
      { name: '$active_feature_flags', type: 'array' },
      { name: '$event_type', type: 'string' },
      { name: '$ce_version', type: 'number' },
      { name: 'token', type: 'string' },
      { name: '$session_id', type: 'string' },
      { name: '$window_id', type: 'string' },
      { name: '$geoip_city_name', type: 'string' },
      { name: '$geoip_country_name', type: 'string' },
      { name: '$geoip_country_code', type: 'string' },
      { name: '$geoip_continent_name', type: 'string' },
      { name: '$geoip_continent_code', type: 'string' },
      { name: '$geoip_latitude', type: 'number' },
      { name: '$geoip_longitude', type: 'number' },
      { name: '$geoip_time_zone', type: 'string' },
      { name: '$geoip_subdivision_1_code', type: 'string' },
      { name: '$geoip_subdivision_1_name', type: 'string' },
      { name: '$ip', type: 'string' },
    ],
  },
];
