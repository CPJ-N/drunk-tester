// @ts-check

let apiFile = require("../env.json");

// Copied and adapted per instructions on Microsoft Docs
// source: https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-get-started
// ****************************************
const config = {
    endpoint: apiFile.endpoint,
    key: apiFile.key,
    databaseId: apiFile.databaseId,
    containerId: apiFile.containerId,
    sessionContainerId: apiFile.sessionContainerId,
    partitionKey: { kind: "Hash", paths: ["/id"] }
  };
  
  module.exports = config;
  // ****************************************
