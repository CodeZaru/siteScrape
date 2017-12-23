const cheerio = require('cheerio');
const request = require('request');

module.exports = callback => {

    request("https://www.runnersworld.com", (error, response, html) => {

        let results = [];
        let $ = cheerio.load(html);

        let articleObj = {};

        $("channel-image").each((i, element) => {


            let img = $(element).children('img').children('a').children('picture').children('source').attr('srcset');

            let title = $(element).children('.channel-content').children('.article-title').children('a').text().trim();

            let author = $(element).children('.channel-content').children('.byline-container').children('a').text();

            let date = $(element).children('.channel-content').children('date').text();

            let link = $(element).children('.channel-content').children('.article-title').children('a').attr('href');

            let description = $(element).children('.channel-content').children('.field-deck').text().trim();

            articleObj = { title, img, author, date, link, description };

            console.log(`TITLE: ${title}`);
            console.log(`IMG: ${img}`);
            console.log(`AUTHOR: ${author}`);
            console.log(`DATE: ${date}`);
            console.log(`LINK: ${link}`);    
            console.log(`DESCRIPTION: ${description}`);
            
            results.push(articleObj);
        });

        callback(results);
    });
};
