export interface SEOConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const useSEO = (config: SEOConfig) => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  const siteUrl = runtimeConfig.public.siteUrl || "https://vue-formik.netlify.app";
  const siteName = runtimeConfig.public.siteName || "Vue Formik";

  const title = config.title ? `${config.title} | ${siteName}` : siteName;

  const description =
    config.description ||
    "Vue Formik is a form library for Vue.js that helps you build forms with ease. Battle-tested, easy to use, and flexible.";

  const image = config.image || `${siteUrl}/logo.png`;
  const url = config.url || `${siteUrl}${route.path}`;

  useHead({
    title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content: config.keywords?.join(", ") || "vue, vuejs, formik, forms, validation, vue-formik",
      },
      {
        name: "author",
        content: config.author || "Kiran Parajuli",
      },
      // Open Graph
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:url",
        content: url,
      },
      {
        property: "og:type",
        content: config.type || "website",
      },
      {
        property: "og:site_name",
        content: siteName,
      },
      // Twitter Card
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: image,
      },
      // Article meta (if type is article)
      ...(config.type === "article"
        ? [
            {
              property: "article:published_time",
              content: config.publishedTime || new Date().toISOString(),
            },
            ...(config.modifiedTime
              ? [
                  {
                    property: "article:modified_time",
                    content: config.modifiedTime,
                  },
                ]
              : []),
          ]
        : []),
    ],
    link: [
      {
        rel: "canonical",
        href: url,
      },
    ],
  });

  // Structured data (JSON-LD)
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": config.type === "article" ? "Article" : "WebSite",
          name: title,
          description,
          url,
          image,
          ...(config.type === "article"
            ? {
                datePublished: config.publishedTime || new Date().toISOString(),
                dateModified:
                  config.modifiedTime || config.publishedTime || new Date().toISOString(),
                author: {
                  "@type": "Person",
                  name: config.author || "Kiran Parajuli",
                },
              }
            : {
                publisher: {
                  "@type": "Organization",
                  name: siteName,
                },
              }),
        }),
      },
    ],
  });
};
