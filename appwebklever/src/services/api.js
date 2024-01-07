const axios = require('axios');

const apiKey = '9523fd3b-0a68-40ff-8d93-13456bf3cc4d';
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';


const parametros = {
  start: '1',
  limit: '5000',
  convert: 'USD',
};

const headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': apiKey,
};

axios.get(url, { params: parametros, headers })
  .then(response => {
    
    if (response.status === 200) {
      response.data.data.forEach(coin => {
        const nome = coin.name;
        const simbolo = coin.symbol;
        const precoUSD = coin.quote.USD.price;
        console.log(`${nome} (${simbolo}): ${precoUSD} USD`);
      });
    } else {
      console.error(`Erro na chamada da API: ${response.status} - ${response.data.status.error_message}`);
    }
  })
  .catch(error => {
    console.error('Erro na chamada da API:', error.message);
  });