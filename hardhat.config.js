require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    x1testnet: {
      url: "https://testnet-rpc.x1ecochain.com",
      chainId: 10102,
      accounts: [process.env.PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"] // dummy key
    },
    x1mainnet: {
      url: "https://rpc.x1ecochain.com",
      chainId: 10101,
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  }
};
