import { MAIN_DESCRIPTION } from '@data'
import { DefaultSeo } from 'next-seo'

export const DefaultSEO = () => {
  return (
    <DefaultSeo
      title="Rogelio Samuel | Software developer"
      description={MAIN_DESCRIPTION}
      openGraph={{
        url: 'https://rogeliosamuel.com',
        title: 'Rogelio Samuel - Software developer',
        description: MAIN_DESCRIPTION,
        images: [
          {
            url: '/img/og-cover.png'
          }
        ],
        type: 'website'
      }}
      twitter={{
        handle: '@sam_621_',
        site: '@sam_621_',
        cardType: 'summary_large_image'
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/img/favicon.svg'
        }
      ]}
    />
  )
}
