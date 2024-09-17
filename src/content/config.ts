import { socials } from "@/lib/constants";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    isDraft: z.boolean().default(false),
    author: z.string().default('kareem'),
    // tags: z.array(z.string()),
    footnote: z.string(),
    publishDate: z.date(),
    authorContact: z.string().email().default(socials.email),
  })
})

export const collections = {
  blog,
}

