import * as cheerio from 'cheerio'
async function getData(){
    
    const response = await fetch('https://www.olx.com.pk/mobile-phones_c1453');
    
    const text = await response.text();
    // console.log(text);
    const $ = cheerio.load(text);
    $('.ba608fb8 > li').each((index,element)=>{
        const price = $(element).find('._52497c97').text();
        console.log(price);
    })
}

getData();