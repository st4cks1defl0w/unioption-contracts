const DISTRICT_REGISTRY_ENV = process.env.DISTRICT_REGISTRY_ENV || "dev";

const smartContractsPaths = {
    "dev": '/src/district_registry/shared/smart_contracts_dev.cljs',
    "qa": '/src/district_registry/shared/smart_contracts_qa.cljs',
    "prod": '/src/district_registry/shared/smart_contracts_prod.cljs'
};

module.exports = {
    env: DISTRICT_REGISTRY_ENV,
    smartContractsPath: __dirname + smartContractsPaths[DISTRICT_REGISTRY_ENV]
}
