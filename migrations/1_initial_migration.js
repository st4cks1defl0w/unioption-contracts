const { env, smartContractsPath } = require("../truffle.js");
const { writeSmartContracts, getSmartContractAddress, readSmartContractsFile, setSmartContractAddress } = require("./utils.js");


let smartContractsList = [];

const Migrations = artifacts.require("Migrations");
const chef = artifacts.require('OptionChef');
const token = artifacts.require('UniOption.sol');
// Swap for real Hegic option factory address
const HEGIC_ADDRESS = "0xefc0eeadc1132a12c9487d800112693bf49ecfa2";
const METADATA_BASE = "https://stacksideflow.github.io/unioption-nft/meta/"

module.exports = async (deployer) => {
  await deployer.deploy(Migrations);
  const migrations = await Migrations.deployed();
  await deployer.deploy(chef, HEGIC_ADDRESS);
  const chefd = await chef.deployed();
  await deployer.deploy(token, chefd.address, METADATA_BASE);
  const tokend = await token.deployed();

  let smartContracts = readSmartContractsFile(smartContractsPath);
  // two lines below are redundant
  setSmartContractAddress(smartContracts, ":migrations", migrations.address);
  writeSmartContracts(smartContractsPath, smartContracts, env);

  assignContract(chefd, "OptionChef", "optionchef");
  assignContract(tokend, "UniOption", "unioption");
  writeSmartContracts(smartContractsPath, smartContractsList, env)
};

function assignContract(contract_instance, contractName, contract_key, opts) {
  console.log("- Assigning '" + contractName + "' to smart contract listing...");
  opts = opts || {};
  smartContractsList = smartContractsList.concat(
    encodeContractEDN(contract_instance, contractName, contract_key, opts));
}
