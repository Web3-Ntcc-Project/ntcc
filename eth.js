

const options = {
  method: 'GET',
  url: 'https://deep-index.moralis.io/api/v2/erc20/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/price',
  params: {chain: 'eth'},
  headers: {accept: 'application/json', 'X-API-Key': 'nIoOmyPAIMIEwiPQdON77I4bak83A1JDW2VXddpKimZCd2QE3zUh6tb1CdH3VOfo'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data['usdPrice']);
    document.getElementById("price-eth").innerHTML ='$' + Math.round(response.data['usdPrice'] * 100) / 100;
  })
  .catch(function (error) {
    console.error(error);
  });

  