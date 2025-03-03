const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const sitemapStream = new SitemapStream({ hostname: 'https://mygaminggalaxy.com/' });
const writeStream = fs.createWriteStream('./build/sitemap.xml');
sitemapStream.pipe(writeStream);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/games/:id', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/aboutCasinos', changefreq: 'weekly', priority: 0.7 },
  { url: '/privacy', changefreq: 'weekly', priority: 0.8 },
  { url: '/terms', changefreq: 'weekly', priority: 0.7 },
  { url: '/cookies', changefreq: 'weekly', priority: 0.7 },
];

links.forEach(link => {
  sitemapStream.write(link);
});

const promise = streamToPromise(sitemapStream).then(() => {
    console.log('Sitemap successfully generated!');
    writeStream.end();  
}).catch(error => {
    console.error('Error generating sitemap:', error);
});

sitemapStream.end();

promise;
