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

export const experience = defineCollection({
  type: "content",
  schema: z.object({
    org: z.string(),
    isSchool: z.boolean().default(false),
    positions: z.array(
      z.object({
        subtitle: z.string(),
        dateStart: z.coerce.date(),
        dateEnd: z.union([z.coerce.date(), z.enum(["Present"])]),
      }),
    ),
  }),
});


export const collections = { blog, experience };
