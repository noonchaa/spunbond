module.exports = {
    siteUrl: 'https://spunbond.vercel.app',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [],
    // optional
    robotsTxtOptions: {
        policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ''
        }
      ]
    }
}