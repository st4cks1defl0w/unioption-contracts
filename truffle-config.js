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
   development: {
     host: "127.0.0.1",
     port: 7545,
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
  }
};