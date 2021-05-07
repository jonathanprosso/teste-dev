const express = require('express');
const robo = require('../lib/robo.js'); 
const validaData = require('../lib/data.js'); 

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Robô Crawler!');
});

router.post('/buscar', (req, res) => {
  const { checkin,  checkout} = req.body;

  try {
    // robo Crawler
    robo(validaData(checkin), validaData(checkout)).then((imoveis) => {
      if(imoveis.length === 0){
        res.status(200).send({
          status: 2,
          message: "Desculpe-nos. Não existem apartamentos disponíveis para a pesquisa realizada."
        });
      }else{
        res.status(200).send({
          status: 1,
          dados: imoveis
        });
      }
    });

  } catch (err) {
    res.status(400).send({ 
      status: 0,
      message: err.message 
    });   
  }
  
});

module.exports = router;