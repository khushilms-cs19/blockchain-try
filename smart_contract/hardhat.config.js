// https://eth-ropsten.alchemyapi.io/v2/bBbwvmGK05kGUak0W3W518Jt4HSS1LpJ 
require("@nomiclabs/hardhat-waffle");;
module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: "https://eth-ropsten.alchemyapi.io/v2/bBbwvmGK05kGUak0W3W518Jt4HSS1LpJ",
            accounts: ["30cf8a113d22c66e5b6acadad81f958ab8739d8827e89987abd3cebc20653bdb"],
        }
    }
}