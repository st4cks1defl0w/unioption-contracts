require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    // testing on `truffle develop` for quick iteration
    networks: {
        ropsten: {
            provider: function() {
                return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`)
            },
            // confirmations: 2,
            network_id: 3,
            skipDryRun: true
        },
        main: {
            provider: function() {
                return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`)
            },
            // confirmations: 2,
            network_id: 1
        },
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*"
        },
        test: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        }
    },
    compilers: {
        solc: {
            version: '0.6.12'
        }
    },
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY
    },
};
