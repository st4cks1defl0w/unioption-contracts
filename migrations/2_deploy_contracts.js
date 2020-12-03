const chef = artifacts.require('OptionChef');
const token = artifacts.require('UniOption.sol');
// Swap for real Hegic option factory address
const HEGIC_ADDRESS = "0xefc0eeadc1132a12c9487d800112693bf49ecfa2";
const METADATA_BASE = "https://stacksideflow.github.io/unioption-nft/meta/"

module.exports = async (deployer) => {
  await deployer.deploy(chef, HEGIC_ADDRESS);
  let chefd = await chef.deployed();
  await deployer.deploy(token, chefd.address, METADATA_BASE);
};
