import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    org: z.string(),
    subtitle: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.enum(["Present"])]),
    isSchool: z.boolean().default(false),
  }),
});


export const collections = { blog, experience };
