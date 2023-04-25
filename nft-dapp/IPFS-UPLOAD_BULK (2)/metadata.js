let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for (let i = 0; i < 4; i++) {
    let paddedHex = ("000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    ipfsArray.push({
        path: `metadata/${paddedHex}.json`,
        content: {
            image: `https://ipfs.moralis.io:2053/ipfs/QmQzzfZpTG3Fu39WrwSrzC8u1atuABjkzrsvqUeZ3RDPwf/images/${paddedHex}.png`,
            name: `NFT #${i}`,
            description: "Testing"
        }
    })
}
axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", 
    ipfsArray,
    {
        headers: {
            "X-API-KEY": 'nIoOmyPAIMIEwiPQdON77I4bak83A1JDW2VXddpKimZCd2QE3zUh6tb1CdH3VOfo',
            "Content-Type": "application/json",
            "accept": "application/json"
        }
    }
).then( (res) => {
    console.log(res.data);
})
.catch ( (error) => {
    console.log(error)
})