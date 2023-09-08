import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-netlify-cms";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	site: "https://flexfolio.zank.studio",
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
	},
	integrations: [
		tailwind(),
		sitemap(),
		NetlifyCMS({
			config: {
				backend: {
					name: "github",
					repo: "zankhq/flexfolio",
					branch: "main",
					base_url: "https://flexfolio.zank.studio",
					auth_endpoint: "/api/auth",
				},
				media_folder: "public/images",
				public_folder: "/images",
				collections: [
					// Content collections
					{
						name: "portflio",
						label: "Portfolio items",
						folder: "src/content/portfolio",
						create: true,
						delete: true,
						fields: [
							{
								name: "title",
								widget: "string",
								label: "Post Title",
							},
							{
								label: "Image",
								name: "image",
								widget: "object",
								fields: [
									{
										label: "Source",
										name: "src",
										widget: "image",
									},
									{
										label: "Alt Text",
										name: "alt",
										widget: "string",
									},
								],
							},
							{
								label: "Snippet",
								name: "snippet",
								widget: "text",
							},
							{
								label: "Links",
								name: "links",
								widget: "object",
								fields: [
									{
										label: "Source",
										name: "src",
										widget: "string",
									},
									{
										label: "Icon",
										name: "icon",
										widget: "string",
									},
								],
							},
							{
								label: "Publish Date",
								name: "publishDate",
								widget: "datetime",
								format: "YYYY-MM-DD HH:mm",
							},
							{
								name: "body",
								widget: "markdown",
								label: "Post Body",
							},
						],
					},
				],
			},
			disableIdentityWidgetInjection: true,
		}),
		alpinejs(),
	],
});
