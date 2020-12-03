# UniOption exchange contracts

## built with truffle, oz

## consists of NFT, Chef and adapter contracts

### install deps && compile 

`npm i && truffle compile`

### spin up localchain 

`truffle develop`

### deploy contracts
 after installing deps, compiling and launching localchain (as a parallel process):
 
 `truffle migrate --reset`
 

## proposed migratable chain of trust:
### deployer (multisig/dao/trusted address) -> Chef -> NFT

## TODO
- verify transferOwnership chain
- decouple chef and owner, add ability to migrate metadata _baseUrl_
- split Chef into adapters
- ...

### NB - security guarantees
- no double-minting
- beforeTokenTransfer hook locks NFT unless it's owned by Chef

### NB - current testnet deployments
-  https://ropsten.etherscan.io/address/0xaAD7C0dede1e48F22941234c48b31E09E79A8D34#contracts 

-  https://ropsten.etherscan.io/address/0xe0A17145562066AB91B57F2623f4ce991aBaD4C0#contracts

### NB - current mainnet deployments

- OptionChef: https://etherscan.io/address/0x078705F1FeaF96735b17c213E14eD3756D0a6110

- NFT: https://etherscan.io/address/0xc08E1110a7b1E505148975dCB0014078B4B1Afa0
