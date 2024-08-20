
export const TITLE = "Astroport";
export const DESCRIPTION =
  "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app. Speed Matters ⚡.";

export const defaultMetadata = {
  title: {
    template: `%s | ${TITLE}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://astroport.it"),
};

export const twitterMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  card: "summary_large_image",
  images: ["/opengraph-image.png"],
};

export const ogMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  type: "website",
  images: ["/opengraph-image.png"],
};
