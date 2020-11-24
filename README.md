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
