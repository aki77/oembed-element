type Endpoint = {
  schemes: readonly string[]
  url: string
  discovery?: boolean
}

export type Provider = {
  provider_name: string
  provider_url: string
  endpoints: readonly Endpoint[]
}

// SEE: https://oembed.com/providers.json
export const DEFAULT_PROVIDERS: readonly Provider[] = [
  {
    provider_name: 'YouTube',
    provider_url: 'https://www.youtube.com/',
    endpoints: [
      {
        schemes: ['https://*.youtube.com/watch*', 'https://*.youtube.com/v/*', 'https://youtu.be/*'],
        url: 'https://www.youtube.com/oembed',
        discovery: true
      }
    ]
  },
  {
    provider_name: 'Vimeo',
    provider_url: 'https://vimeo.com/',
    endpoints: [
      {
        schemes: [
          'https://vimeo.com/*',
          'https://vimeo.com/album/*/video/*',
          'https://vimeo.com/channels/*/*',
          'https://vimeo.com/groups/*/videos/*',
          'https://vimeo.com/ondemand/*/*',
          'https://player.vimeo.com/video/*'
        ],
        url: 'https://vimeo.com/api/oembed.{format}',
        discovery: true
      }
    ]
  },
  {
    provider_name: 'SoundCloud',
    provider_url: 'http://soundcloud.com/',
    endpoints: [
      {
        schemes: ['http://soundcloud.com/*', 'https://soundcloud.com/*', 'https://soundcloud.app.goog.gl/*'],
        url: 'https://soundcloud.com/oembed'
      }
    ]
  },
  {
    provider_name: 'Twitter',
    provider_url: 'http://www.twitter.com/',
    endpoints: [
      {
        schemes: [
          'https://twitter.com/*/status/*',
          'https://*.twitter.com/*/status/*',
          'https://twitter.com/*/moments/*',
          'https://*.twitter.com/*/moments/*'
        ],
        url: 'https://publish.twitter.com/oembed'
      }
    ]
  },
  {
    provider_name: 'TikTok',
    provider_url: 'http://www.tiktok.com/',
    endpoints: [
      {
        schemes: ['https://www.tiktok.com/*/video/*'],
        url: 'https://www.tiktok.com/oembed'
      }
    ]
  },
  {
    provider_name: 'Facebook',
    provider_url: 'https://www.facebook.com/',
    endpoints: [
      {
        schemes: [
          'https://www.facebook.com/*/posts/*',
          'https://www.facebook.com/*/activity/*',
          'https://www.facebook.com/*/photos/*',
          'https://www.facebook.com/photo.php?fbid=*',
          'https://www.facebook.com/photos/*',
          'https://www.facebook.com/permalink.php?story_fbid=*',
          'https://www.facebook.com/media/set?set=*',
          'https://www.facebook.com/questions/*',
          'https://www.facebook.com/notes/*/*/*'
        ],
        url: 'https://graph.facebook.com/v10.0/oembed_post',
        discovery: false
      },
      {
        schemes: [
          'https://www.facebook.com/*/videos/*',
          'https://www.facebook.com/video.php?id=*',
          'https://www.facebook.com/video.php?v=*'
        ],
        url: 'https://graph.facebook.com/v10.0/oembed_video',
        discovery: false
      },
      {
        schemes: ['https://www.facebook.com/*'],
        url: 'https://graph.facebook.com/v10.0/oembed_page',
        discovery: false
      }
    ]
  }
]
