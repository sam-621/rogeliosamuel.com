import { DefaultSeo } from 'next-seo'

const title = 'Rogelio Samuel | Web Developer'
const description = 'Web developer specialized in frontend technologies'

export const DefaultSEO = () => {
  return (
    <DefaultSeo
      title={title}
      description={description}
      openGraph={{
        url: 'https://www.rogeliosamuel.com',
        title: title,
        description: description,
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
