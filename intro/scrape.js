//for http requests
const request = require('request');
//this is basically jquery for node
const cheerio = require('cheerio');

request('http://codedemos.com/sampleblog', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        //now i can use $ like its jquery
        const $ = cheerio.load(html);

        const siteHeading = $('.site-heading');
        const siteHeadingHtml = siteHeading.html();
        // console.log(siteHeading);
        // console.log(siteHeadingHtml);
        // const output = siteHeading.find('h1').text();
        // const outputNext = siteHeading.children('h1').next().text();
        // console.log(output);
        // console.log(outputNext);
        $('.nav-item a').each((i, element) => {
            const item = $(element).text();
            const link = $(element).attr('href');
            console.log(item);
        })
    }
});