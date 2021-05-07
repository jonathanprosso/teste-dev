const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function scrape (checkIn, checkOut){
  const url = "https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation#/&diff=false&CheckIn="+checkIn+"&CheckOut="+checkOut+"&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-";
  
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitFor(1000)
  
  const result = await page.evaluate(() => {
    const html = document.querySelector('html');    
    return html.innerHTML;
  })
  
  browser.close();

  return result;
};

module.exports = async function robo(checkIn, checkOut) {

  const body = await scrape(checkIn, checkOut);
  const $ = cheerio.load(body);
  
  const imoveis = [];
  $('.maintable tbody tr.roomName').each(function(){
      var nome = $(this).find('.excerpt h5 a').text().trim();
      var descricao = $(this).find('.excerpt p a').text().trim();
      var preco = $(this).find('h6.bestPriceTextColor').text().trim();
  
      const nodeImagens = $(this).find('.roomSlider .slide');
  
      const imagens = [];
      $(nodeImagens).each(function(){
        const imagem = $(this).find('.slide a img').attr('src');
        imagens.push(imagem);
      });
  
      imoveis.push({'nome': nome, 'descricao': descricao, 'preco': preco, 'imagens': imagens});
  });
  return imoveis;
}
