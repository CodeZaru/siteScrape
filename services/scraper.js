const cheerio = require('cheerio');
const request = require('request');

module.exports = callback => {

    request("https://www.runnersworld.com/general-interest", (error, response, html) => {

        let results = [];
        let $ = cheerio.load(html);

        let articleObj = {};

        $("div.channel-image").each((i, element) => {


            let img = $(element).children('div.img').children('a').children('picture').children('source').attr('srcset');

            let title = $(element).children('div.channel-content').children('div.article-title').children('a').text().trim();

            let author = $(element).children('div.channel-content').children('div.byline-container').children('span.field-author').children('a').text();

            //let date = $(element).children('div.channel-content').children('div.byline-container').children('.date').text();

            let link = $(element).children('div.channel-content').children('.article-title').children('a').attr('href');

            let description = $(element).children('div.channel-content').children('.field-dek').text().trim();

            articleObj = { title, img, author, link, description };

            console.log(`TITLE: ${title}`);
            console.log(`IMG: ${img}`);
            console.log(`AUTHOR: ${author}`);
            //console.log(`DATE: ${date}`);
            console.log(`LINK: ${link}`);    
            console.log(`DESCRIPTION: ${description}`);
            
            results.push(articleObj);
        });

        callback(results);
    });
};
