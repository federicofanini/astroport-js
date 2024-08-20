// import { allChangelogs, allPosts } from "contentlayer/generated";

const addPathToBaseURL = (path) => `https://astroport.it${path}`;

export default function sitemap() {
  // const blogs = allPosts.map((post) => ({
  //   url: `https://astroport.it/blog/${post.slug}`,
  //   lastModified: post.publishedAt, // date format should be YYYY-MM-DD
  // }));

  const routes = [
    "/",
    "/blog",
    "/pricing",
  ].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }));

  // return [...routes, ...blogs, ...changelogs];
  return [...routes];
}
