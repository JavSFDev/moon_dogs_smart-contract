import { HardhatUserConfig } from "hardhat/types";
import { node_url, accounts, verifyKey } from "./utils/network";
import { removeConsoleLog } from "hardhat-preprocessor";

import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "hardhat-watcher";
import "solidity-coverage";
import "hardhat-storage-layout";
import "dotenv/config";

import "./tasks/account";
import "./tasks/verify";
import "./tasks/contracts";

const config: HardhatUserConfig = {
  defaultNetwork: "core",
  networks: {
    hardhat: {
      chainId: 1116,
      forking: {
        enabled: process.env.FORKING_ENABLED === "true",
        blockNumber: Number(process.env.FORKING_BLOCK_NUM) || undefined,
        url: node_url("testnet"),
      },
      accounts: accounts("localhost"),
      mining: {
        auto: process.env.AUTO_MINING_ENABLED === "true",
        // interval: Number(process.env.MINING_INTERVAL),
      },
    },
    localhost: {
      url: node_url("localhost"),
      accounts: accounts("localhost"),
      tags: ["local", "test"],
    },
    core: {
      url: `https://rpc.coredao.org/`,
      accounts: ["0xf063ef6392c965584bbf0f1f92b1a205cd4f4a6cb1409691e52217fa066feba5"],
      chainId: 1116,
      gasPrice: 30000000000,
      gas: 5000000,
    },
    mainnet: {
      url: node_url("mainnet"),
      tags: ["prod", "live"],
    },
    testnet: {
      url: node_url("testnet"),
      accounts: accounts("testnet"),
      tags: ["test", "live"],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: verifyKey("coredao"),
      testnet: verifyKey("coredao"),
    },
    customChains: [
      {
        network: "testnet",
        chainId: 1115,
        urls: {
          apiURL: "https://scan.test.btcs.network/api",
          browserURL: "https://scan.test.btcs.network/",
        },
      },
    ]
  },
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: Number(process.env.OPTIMIZER_RUNS || 200),
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    signer: 1,
    vault: 2,
    alice: 3,
    bob: 4,
  },
  abiExporter: {
    path: "./abis",
    runOnCompile: false,
    clear: true,
    flat: true,
    spacing: 2,
    pretty: true,
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  mocha: {
    timeout: 3000000,
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD",
    enabled: process.env.REPORT_GAS === "true",
    src: "./contracts",
  },
  preprocess: {
    eachLine: removeConsoleLog((hre) => hre.network.name !== "hardhat" && hre.network.name !== "localhost"),
  },
};

export default config;
