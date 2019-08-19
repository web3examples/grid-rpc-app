const geth = [
  'web3_clientVersion',
  'web3_sha3',
  'net_version',
  'net_peerCount',
  'net_listening',
  'eth_protocolVersion',
  'eth_syncing',
  'eth_coinbase',
  'eth_mining',
  'eth_hashrate',
  'eth_gasPrice',
  'eth_accounts',
  'eth_blockNumber',
  'eth_getBalance',
  'eth_getStorageAt',
  'eth_getTransactionCount',
  'eth_getBlockTransactionCountByHash',
  'eth_getBlockTransactionCountByNumber',
  'eth_getUncleCountByBlockHash',
  'eth_getUncleCountByBlockNumber',
  'eth_getCode',
  'eth_sign',
  'eth_sendTransaction',
  'eth_sendRawTransaction',
  'eth_call',
  'eth_estimateGas',
  'eth_getBlockByHash',
  'eth_getBlockByNumber',
  'eth_getTransactionByHash',
  'eth_getTransactionByBlockHashAndIndex',
  'eth_getTransactionByBlockNumberAndIndex',
  'eth_getTransactionReceipt',
  'eth_pendingTransactions',
  'eth_getUncleByBlockHashAndIndex',
  'eth_getUncleByBlockNumberAndIndex',
  'eth_getCompilers',
  'eth_compileLLL',
  'eth_compileSolidity',
  'eth_compileSerpent',
  'eth_newFilter',
  'eth_newBlockFilter',
  'eth_newPendingTransactionFilter',
  'eth_uninstallFilter',
  'eth_getFilterChanges',
  'eth_getFilterLogs',
  'eth_getLogs',
  'eth_getWork',
  'eth_submitWork',
  'eth_submitHashrate',
  'eth_getProof',
  'db_putString',
  'db_getString',
  'db_putHex',
  'db_getHex',
  'shh_post',
  'shh_version',
  'shh_newIdentity',
  'shh_hasIdentity',
  'shh_newGroup',
  'shh_addToGroup',
  'shh_newFilter',
  'shh_uninstallFilter',
  'shh_getFilterChanges',
  'shh_getMessages'
];

const parity = [
  'parity_allTransactionHashes',
  'parity_allTransactions',
  'parity_call',
  'parity_cidV0',
  'parity_composeTransaction',
  'parity_consensusCapability',
  'parity_decryptMessage',
  'parity_encryptMessage',
  'parity_futureTransactions',
  'parity_getBlockHeaderByNumber',
  'parity_getBlockReceipts',
  'parity_hardwarePinMatrixAck',
  'parity_listOpenedVaults',
  'parity_listStorageKeys',
  'parity_listVaults',
  'parity_localTransactions',
  'parity_lockedHardwareAccountsInfo',
  'parity_releasesInfo',
  'parity_signMessage',
  'parity_submitWorkDetail',
  'parity_verifySignature',
  'parity_versionInfo',
  'parity_changeVault',
  'parity_changeVaultPassword',
  'parity_closeVault',
  'parity_getVaultMeta',
  'parity_newVault',
  'parity_openVault',
  'parity_setVaultMeta',
  'parity_accountsInfo',
  'parity_checkRequest',
  'parity_defaultAccount',
  'parity_generateSecretPhrase',
  'parity_hardwareAccountsInfo',
  'parity_listAccounts',
  'parity_phraseToAddress',
  'parity_postSign',
  'parity_postTransaction',
  'parity_defaultExtraData',
  'parity_extraData',
  'parity_gasCeilTarget',
  'parity_gasFloorTarget',
  'parity_minGasPrice',
  'parity_transactionsLimit',
  'parity_devLogs',
  'parity_devLogsLevels',
  'parity_chain',
  'parity_chainStatus',
  'parity_gasPriceHistogram',
  'parity_netChain',
  'parity_netPeers',
  'parity_netPort',
  'parity_nextNonce',
  'parity_pendingTransactions',
  'parity_pendingTransactionsStats',
  'parity_registryAddress',
  'parity_removeTransaction',
  'parity_rpcSettings',
  'parity_unsignedTransactionsCount',
  'parity_enode',
  'parity_mode',
  'parity_nodeKind',
  'parity_nodeName',
  'parity_wsUrl'
];

export default {
  geth,
  parity
};
