//for http requests
const request = require('request');
//this is basically jquery for node
const cheerio = require('cheerio');
//filesystem module
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv'); //param is what you want to write to
//Write Headers
// //header was example
// writeStream.write(`Title,Link,Date \n`);
// //
writeStream.write(`Links \n`);
request('http://codedemos.com/sampleblog', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        //now i can use $ like its jquery
        const $ = cheerio.load(html);
        // //doesnt work. website down???
        // $('.post-preview').each((i, el) => {
        //     const title = $(el)
        //         .find('.post-title')
        //         .text()
        //         //regex to remove unnecessary white space
        //         .replace(/\s\s+/g, '');
        //     const link = $(el)
        //         .find('a')
        //         .attr('href');
        //     const date = $(el)
        //         .find('.post-date')
        //         .text()
        //         .replace(/,/, '');
        //     console.log(`${title}, ${link}, ${date}`)
        //     //Write Row To CSV
        //     writeStream.write(`${title}, ${link}, ${date} \n`);
        // });
        // //
        $('.kwds ul li a').each((i, el) => {
            const href = $(el).attr('href');
            writeStream.write(`${href}-${i} \n`)
        });

        console.log('Scraping Done...')
    }
});