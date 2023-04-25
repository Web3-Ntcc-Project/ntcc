import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://deep-index.moralis.io/api/v2/nft/address',
  params: {chain: 'eth', format: 'decimal', normalizeMetadata: 'false'},
  headers: {accept: 'application/json', 'X-API-Key': 'test'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });