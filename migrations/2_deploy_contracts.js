const chef = artifacts.require('OptionChef');
const token = artifacts.require('UniOption.sol');
// Swap for real Hegic option factory address
const HEGIC_ADDRESS = "0x0000000000000000000000000000000000000000";

module.exports = async(deployer) => {
  await deployer.deploy(chef, HEGIC_ADDRESS);
  let chefd = await chef.deployed();
  await deployer.deploy(token, chefd.address);
};
