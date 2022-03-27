//https://eth-ropsten.alchemyapi.io/v2/uLUpKKJlGzlrSkgKZRgkCCxul47R7kJW

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/uLUpKKJlGzlrSkgKZRgkCCxul47R7kJW",
      accounts: [
        "05aa0a8b6ee69f31a6a20807f378fe8dce48e5364ea85c8f0d62c9bc08dddbdb",
      ],
    },
  },
};
