import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    type: z.string(),
    preview: z.string(),
    order: z.number(),
  }),
})

const blogsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    title: z.string(),
    host: z.string(),
    preview: z.string(),
    order: z.number(),
  }),
})

export const collections = {
  projects: projectsCollection,
  blogs: blogsCollection,
}
