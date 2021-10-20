export const blogs: TBlog[] = [
  {
    id: 0,
    image: '/images/fenix_blog.png',
    title: 'Cómo crear una página web con ISR? y por qué lo usamos en EDteam',
    shortDescription:
      'En una de las campañas de EDteam tuvimos problemas con el rendimiento de nuestra web e identificamos 2 problemas.',
    demo: 'https://app.ed.team/blog/como-crear-una-pagina-web-con-isr-y-por-que-lo-usamos-en-edteam',
  },
  {
    id: 1,
    image: '/images/git_blog.png',
    title: '5 git commands you should know',
    shortDescription: `Here I'm going to list some git commands you should know, explain what they do, and use cases`,
    demo: 'https://dev.to/rogeliosamuel621/5-git-commands-you-should-know-1o2g',
  },
]

export interface TBlog {
  id: number
  image: string
  title: string
  shortDescription: string
  demo: string
}
