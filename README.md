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
- verify transferOwnership
- (!) look into 0x relayer locking mechanism, lock unwrapping when NFT is on sale
- add an ability to mint/exercise underlying option
- split Chef into adapters
- ...

### NB - security guarantees
- no double-minting
- beforeTokenTransfer hook locks NFT unless it's owned by Chef

### NB - current testnet deployments
-  https://ropsten.etherscan.io/address/0xaAD7C0dede1e48F22941234c48b31E09E79A8D34#contracts 

-  https://ropsten.etherscan.io/address/0xe0A17145562066AB91B57F2623f4ce991aBaD4C0#contracts
