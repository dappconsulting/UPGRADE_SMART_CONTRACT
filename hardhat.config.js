// require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require('@openzeppelin/hardhat-upgrades')
require("@nomiclabs/hardhat-etherscan")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://goerli.infura.io/v3/f08c6ce29b4b4e36b7e5faa625d887f0"
//const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
//const MNEMONIC = process.env.MNEMONIC || "your mnemonic"
//const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
// optional
// Private key for my dev metamask wallet/account for the hardhat 1 address
const PRIVATE_KEY = process.env.PRIVATE_KEY || "387b1beebd7016fb0269abb5d719b85c5c0db50e62d2ab5064cd7af212024bce"
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    local: {
      url: 'http://127.0.0.1:8545/'
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      //accounts: {
      //  mnemonic: MNEMONIC,
      //},
      saveDeployments: true,
    },
  },
  solidity: "0.8.2",
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "X3X5PQW547FHN8NIWN9Q8CWXUR54S3YMT4"
  },
}

