/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ziostechsolutions.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.7;

    if (path === "/") priority = 1.0;
    else if (path.startsWith("/services")) priority = 0.8;
    else if (path === "/projects") priority = 0.8;
    else if (path === "/about") priority = 0.8;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  sitemapSize: 5000,
  exclude: ["/private", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
