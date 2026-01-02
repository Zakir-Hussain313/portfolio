/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zakirhussain.dev', // your domain
  generateRobotsTxt: true,             // automatically generates robots.txt
  sitemapSize: 5000,                    // optional, split sitemap if > 5000 URLs
  changefreq: 'weekly',                 // optional, hints to search engines
  priority: 0.7,                        // optional, default priority
};