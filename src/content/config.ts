// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
// 2. Define your collection(s)
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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
}
