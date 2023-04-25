

const options1 = {
    method: 'GET',
    url: 'https://deep-index.moralis.io/api/v2/erc20/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/price',
    params: {chain: 'eth'},
    headers: {accept: 'application/json', 'X-API-Key': 'nIoOmyPAIMIEwiPQdON77I4bak83A1JDW2VXddpKimZCd2QE3zUh6tb1CdH3VOfo'}
  };
  
  axios
    .request(options1)
    .then(function (response) {
      console.log(response.data['usdPrice']);
      document.getElementById("price-btc").innerHTML ='$' + Math.round(response.data['usdPrice'] * 100) / 100;
    })
    .catch(function (error) {
      console.error(error);
    });
  
    