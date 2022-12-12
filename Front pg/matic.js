

const options2 = {
    method: 'GET',
    url: 'https://deep-index.moralis.io/api/v2/erc20/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/price',
    params: {chain: 'eth'},
    headers: {accept: 'application/json', 'X-API-Key': 'nIoOmyPAIMIEwiPQdON77I4bak83A1JDW2VXddpKimZCd2QE3zUh6tb1CdH3VOfo'}
  };
  
  axios
    .request(options2)
    .then(function (response) {
      console.log(response.data['usdPrice']);
      document.getElementById("price-matic").innerHTML ='$' + Math.round(response.data['usdPrice'] * 100) / 100;
    })
    .catch(function (error) {
      console.error(error);
    });
  
    