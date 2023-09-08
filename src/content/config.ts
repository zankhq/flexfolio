import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		snippet: z.string(),
		links: z.array(
			z.object({
				icon: z.string(),
				src: z.string(),
			}),
		),
		publishDate: z.string().transform((str) => new Date(str)),
	}),
});

export const collections = {
	portfolio: portfolioCollection,
};
