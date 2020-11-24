const NFT = artifacts.require("UniOption");

module.exports = function(deployer) {
  deployer.deploy(NFT);
};
