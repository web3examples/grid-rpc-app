// NOTE: `exampleParams` must be strings to properly populate the placeholders.
// `exampleResult` may be any data type, however.

// Source: https://github.com/ethereum/wiki/wiki/JSON-RPC
const geth = [
  {
    method: 'web3_clientVersion',
    description: 'Returns the current client version',
    descriptionParams: 'None',
    descriptionResult: 'String - the current client version',
    exampleParams: '[]',
    exampleResult: '"Mist/v0.9.3/darwin/go1.4.1"'
  },
  {
    method: 'web3_sha3',
    description:
      'Returns Keccak-256 (not the standardized SHA3-256) of the given data',
    descriptionParams: 'DATA - the data to convert into a SHA3 hash',
    descriptionResult: 'DATA - The SHA3 result of the given string',
    exampleParams: '["0x68656c6c6f20776f726c64"]',
    exampleResult:
      '"0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"'
  },
  {
    method: 'net_version',
    description: 'Returns the current network ID',
    descriptionParams: 'None',
    descriptionResult: 'String - the current network ID',
    exampleParams: '[]',
    exampleResult: '"3"'
  },
  {
    method: 'net_listening',
    description:
      'Returns `true` if client is actively listening for network connections',
    descriptionParams: 'None',
    descriptionResult: 'Boolean - `true` when listening, otherwise `false`',
    exampleParams: '[]',
    exampleResult: 'true'
  },
  {
    method: 'net_peerCount',
    description: 'Returns number of peers currently connected to the client',
    descriptionParams: 'None',
    descriptionResult: 'QUANTITY - integer of the number of connected peers',
    exampleParams: '[]',
    exampleResult: '"0x2"'
  },
  {
    method: 'eth_protocolVersion',
    description: 'Returns the current ethereum protocol version',
    descriptionParams: 'None',
    descriptionResult: 'String - the current ethereum protocol version',
    exampleParams: '[]',
    exampleResult: '"0x54"'
  },
  {
    method: 'eth_syncing',
    description: 'Returns an object with data about the sync status or `false`',
    descriptionParams: 'None',
    descriptionResult:
      'Object|Boolean - an object with sync status data or `false`, when not syncing',
    exampleParams: '[]',
    exampleResult: {
      startingBlock: '0x384',
      currentBlock: '0x386',
      highestBlock: '0x454'
    }
  },
  {
    method: 'eth_coinbase',
    description: 'Returns the client coinbase address',
    descriptionParams: 'None',
    descriptionResult: 'Data, 20 Bytes - the current coinbase address',
    exampleParams: '[]',
    exampleResult: '"0xc94770007dda54cF92009BFF0dE90c06F603a09f"'
  },
  {
    method: 'eth_mining',
    description: 'Returns `true` if client is actively mining new blocks',
    descriptionParams: 'None',
    descriptionResult:
      'Boolean - returns `true` if the client is mining, otherwise `false`',
    exampleParams: '[]',
    exampleResult: 'true'
  },
  {
    method: 'eth_hashrate',
    description:
      'Returns the number of hashes per second that the node is mining with',
    descriptionParams: 'None',
    descriptionResult: 'QUANTITY - number of hashes per second',
    exampleParams: '[]',
    exampleResult: '"0x38a"'
  },
  {
    method: 'eth_gasPrice',
    description: 'Returns the current price per gas in wei',
    descriptionParams: 'None',
    descriptionResult: 'QUANTITY - integer of the current gas price in wei',
    exampleParams: '[]',
    exampleResult: '"0x09184e72a000"'
  },
  {
    method: 'eth_accounts',
    description: 'Returns a list of addresses owned by client',
    descriptionParams: 'None',
    descriptionResult:
      'Array of DATA, 20 Bytes - addresses owned by the client',
    exampleParams: '[]',
    exampleResult: ['0xc94770007dda54cF92009BFF0dE90c06F603a09f']
  },
  {
    method: 'eth_blockNumber',
    description: 'Returns the number of the most recent block',
    descriptionParams: 'None',
    descriptionResult:
      'QUANTITY - integer of the current block number the client is on',
    exampleParams: '[]',
    exampleResult: '0xc94'
  },
  {
    method: 'eth_getBalance',
    description: 'Returns the balance of the account of a given address',
    descriptionParams: `DATA, 20 Bytes - address to check for balance
QUANTITY|TAG - integer block number, or the string "latest", "earliest", or "pending"
`,
    descriptionResult: 'QUANTITY - integer of the current balance in wei',
    exampleParams: '["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"]',
    exampleResult: '"0x0234c8a3397aab58"'
  },
  {
    method: 'eth_getStorageAt',
    description: 'Returns the value from a storage position at a given address',
    descriptionParams: `DATA, 20 Bytes - address of the storage.
QUANTITY - integer of the position in the storage.
QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"`,
    descriptionResult: 'DATA - the value at this storage position',
    exampleParams:
      '["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"]',
    exampleResult: [
      '0x00000000000000000000000000000000000000000000000000000000000004d2'
    ]
  },
  {
    method: 'eth_getTransactionCount',
    description: 'Returns the number of transactions sent from an address',
    descriptionParams: `DATA, 20 Bytes - address
QUANTITY|TAG - integer block number, or the string "latest", "earliest", or "pending"
`,
    descriptionResult:
      'QUANTITY - integer of the number of transactions send from this address',
    exampleParams: '["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"]',
    exampleResult: '"0x1"'
  },
  {
    method: 'eth_getBlockTransactionCountByHash',
    description:
      'Returns the number of transactions in a block from a block matching the given block hash',
    descriptionParams: 'DATA, 32 Bytes - hash of a block',
    descriptionResult:
      'QUANTITY - integer of the number of transactions in this block',
    exampleParams:
      '["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"]',
    exampleResult: '0xc'
  },
  {
    method: 'eth_getBlockTransactionCountByNumber',
    description:
      'Returns the number of transactions in a block matching the given block number',
    descriptionParams:
      'QUANTITY|TAG - integer of a block number, or the string "earliest", "latest" or "pending"',
    descriptionResult:
      'QUANTITY - integer of the number of transactions in this block.',
    exampleParams: '["0xe8"]',
    exampleResult: '0xa'
  },
  {
    method: 'eth_getUncleCountByBlockHash',
    description:
      'Returns the number of uncles in a block from a block matching the given block hash',
    descriptionParams: 'DATA, 32 Bytes - hash of a block',
    descriptionResult:
      'QUANTITY - integer of the number of uncles in this block',
    exampleParams: '["0xc94770007dda54cF92009BFF0dE90c06F603a09f"]',
    exampleResult: '0xc'
  },
  {
    method: 'eth_getUncleCountByBlockNumber',
    description:
      'Returns the number of uncles in a block from a block matching the given block number',
    descriptionParams:
      'QUANTITY|TAG - integer of a block number, or the string "latest", "earliest" or "pending"',
    descriptionResult:
      'QUANTITY - integer of the number of uncles in this block',
    exampleParams: '["0xe8"]',
    exampleResult: '0xc'
  },
  {
    method: 'eth_getCode',
    description: 'Returns code at a given address',
    descriptionParams: `DATA, 20 Bytes - address
QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"`,
    descriptionResult: 'DATA - the code from the given address',
    exampleParams: '["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"]',
    exampleResult: '0x600160...'
  },
  {
    method: 'eth_sign',
    description: `The sign method calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).

By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.`,
    descriptionParams: `DATA, 20 Bytes - address.
DATA, N Bytes - message to sign.
`,
    descriptionResult: 'DATA - signature',
    exampleParams:
      '["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"]',
    exampleResult: '0xa3f207...'
  },
  {
    method: 'eth_sendTransaction',
    description:
      'Creates new message call transaction or a contract creation, if the data field contains code',
    descriptionParams: `Object - The transaction object

    from: DATA, 20 Bytes - The address the transaction is send from.
    to: DATA, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.
    gas: QUANTITY - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.
    gasPrice: QUANTITY - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas
    value: QUANTITY - (optional) Integer of the value sent with this transaction
    data: DATA - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI
    nonce: QUANTITY - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
`,
    descriptionResult: `DATA, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.`,
    exampleParams: `[{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0",
  "gasPrice": "0x9184e72a000",
  "value": "0x9184e72a",
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]`,
    exampleResult: '0xe670ec...'
  },
  {
    method: 'eth_sendRawTransaction',
    description:
      'Creates new message call transaction or a contract creation for signed transactions',
    descriptionParams: 'DATA - the signed transaction data',
    descriptionResult: `DATA, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.`,
    exampleParams:
      '["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"]',
    exampleResult: '0xe670ec...'
  },
  {
    method: 'eth_call',
    description:
      'Executes a new message call immediately without creating a transaction on the block chain',
    descriptionParams: `Object - The transaction call object

    from: DATA, 20 Bytes - (optional) The address the transaction is sent from.
    to: DATA, 20 Bytes - The address the transaction is directed to.
    gas: QUANTITY - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.
    gasPrice: QUANTITY - (optional) Integer of the gasPrice used for each paid gas
    value: QUANTITY - (optional) Integer of the value sent with this transaction
    data: DATA - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI

    QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"`,
    descriptionResult: 'DATA - the return value of executed contract',
    exampleParams: '[{...}, "latest"]',
    exampleResult: '0x'
  },
  {
    method: 'eth_estimateGas',
    description:
      'Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.',
    descriptionParams: `Object - The transaction call object

    from: DATA, 20 Bytes - (optional) The address the transaction is sent from.
    to: DATA, 20 Bytes - The address the transaction is directed to.
    gas: QUANTITY - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.
    gasPrice: QUANTITY - (optional) Integer of the gasPrice used for each paid gas
    value: QUANTITY - (optional) Integer of the value sent with this transaction
    data: DATA - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI

    QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"`,
    descriptionResult: 'QUANTITY - the amount of gas used',
    exampleParams: '[{...}, "latest"]',
    exampleResult: '0x5208'
  },
  {
    method: 'eth_getBlockByHash',
    description: 'Return information about a block by hash',
    descriptionParams: `DATA, 32 Bytes - hash of a block
Boolean - if true, it returns the full transaction objects, if false, only the hashes of the transactions
`,
    descriptionResult: `Object - A block object, or null when no block was found:

    number: QUANTITY - the block number. null when its pending block.
    hash: DATA, 32 Bytes - hash of the block. null when its pending block.
    parentHash: DATA, 32 Bytes - hash of the parent block.
    nonce: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    sha3Uncles: DATA, 32 Bytes - SHA3 of the uncles data in the block.
    logsBloom: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    transactionsRoot: DATA, 32 Bytes - the root of the transaction trie of the block.
    stateRoot: DATA, 32 Bytes - the root of the final state trie of the block.
    receiptsRoot: DATA, 32 Bytes - the root of the receipts trie of the block.
    miner: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    difficulty: QUANTITY - integer of the difficulty for this block.
    totalDifficulty: QUANTITY - integer of the total difficulty of the chain until this block.
    extraData: DATA - the "extra data" field of this block.
    size: QUANTITY - integer the size of this block in bytes.
    gasLimit: QUANTITY - the maximum gas allowed in this block.
    gasUsed: QUANTITY - the total used gas by all transactions in this block.
    timestamp: QUANTITY - the unix timestamp for when the block was collated.
    transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    uncles: Array - Array of uncle hashes.
`,
    exampleParams:
      '["0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", true]',
    exampleResult: {
      number: '0x1b4', // 436
      hash: '0xe670ec...',
      parentHash: '0x964625...',
      nonce: '0xe04d29...',
      sha3Uncles: '0x1dcc4d...',
      logsBloom: '0xe670ec...',
      transactionsRoot: '0x56e81f...',
      stateRoot: '0xd5855e...',
      miner: '0x4e65fd...',
      difficulty: '0x027f07', // 163591
      totalDifficulty: '0x027f07', // 163591
      extraData: '0x000000...',
      size: '0x027f07', // 163591
      gasLimit: '0x9f759', // 653145
      gasUsed: '0x9f759', // 653145
      timestamp: '0x54e34e8e', // 1424182926
      transactions: [],
      uncles: ['0x1606e5...', '0xd5145a9...']
    }
  },
  {
    method: 'eth_getBlockByNumber',
    description: 'Resturns information about a block by number',
    descriptionParams: `QUANTITY|TAG - integer of a block number, or the string "earliest", "latest" or "pending"
Boolean - If true, it returns the full transaction objects, if false, only the hashes of the transactions`,
    descriptionResult: `Object - A block object, or null when no block was found:

    number: QUANTITY - the block number. null when its pending block.
    hash: DATA, 32 Bytes - hash of the block. null when its pending block.
    parentHash: DATA, 32 Bytes - hash of the parent block.
    nonce: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    sha3Uncles: DATA, 32 Bytes - SHA3 of the uncles data in the block.
    logsBloom: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    transactionsRoot: DATA, 32 Bytes - the root of the transaction trie of the block.
    stateRoot: DATA, 32 Bytes - the root of the final state trie of the block.
    receiptsRoot: DATA, 32 Bytes - the root of the receipts trie of the block.
    miner: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    difficulty: QUANTITY - integer of the difficulty for this block.
    totalDifficulty: QUANTITY - integer of the total difficulty of the chain until this block.
    extraData: DATA - the "extra data" field of this block.
    size: QUANTITY - integer the size of this block in bytes.
    gasLimit: QUANTITY - the maximum gas allowed in this block.
    gasUsed: QUANTITY - the total used gas by all transactions in this block.
    timestamp: QUANTITY - the unix timestamp for when the block was collated.
    transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    uncles: Array - Array of uncle hashes.
`,
    exampleParams: '["0x1b4", true]',
    exampleResult: {
      number: '0x1b4', // 436
      hash: '0xe670ec...',
      parentHash: '0x964625...',
      nonce: '0xe04d29...',
      sha3Uncles: '0x1dcc4d...',
      logsBloom: '0xe670ec...',
      transactionsRoot: '0x56e81f...',
      stateRoot: '0xd5855e...',
      miner: '0x4e65fd...',
      difficulty: '0x027f07', // 163591
      totalDifficulty: '0x027f07', // 163591
      extraData: '0x000000...',
      size: '0x027f07', // 163591
      gasLimit: '0x9f759', // 653145
      gasUsed: '0x9f759', // 653145
      timestamp: '0x54e34e8e', // 1424182926
      transactions: [],
      uncles: ['0x1606e5...', '0xd5145a9...']
    }
  },
  {
    method: 'eth_getTransactionByHash',
    description:
      'Returns the information about a transaction requested by transaction hash',
    descriptionParams: 'DATA, 32 Bytes - hash of a transaction',
    descriptionResult: `Object - A transaction object, or null when no transaction was found:

    blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
    blockNumber: QUANTITY - block number where this transaction was in. null when its pending.
    from: DATA, 20 Bytes - address of the sender.
    gas: QUANTITY - gas provided by the sender.
    gasPrice: QUANTITY - gas price provided by the sender in Wei.
    hash: DATA, 32 Bytes - hash of the transaction.
    input: DATA - the data send along with the transaction.
    nonce: QUANTITY - the number of transactions made by the sender prior to this one.
    to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    transactionIndex: QUANTITY - integer of the transaction's index position in the block. null when its pending.
    value: QUANTITY - value transferred in Wei.
    v: QUANTITY - ECDSA recovery id
    r: QUANTITY - ECDSA signature r
    s: QUANTITY - ECDSA signature s`,
    exampleParams:
      '["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"]',
    exampleResult: {
      blockHash: '0x1d59ff...',
      blockNumber: '0x5daf3b', // 6139707
      from: '0xa7d9dd...',
      gas: '0xc350', // 50000
      gasPrice: '0x4a817c800', // 20000000000
      hash: '0x88df01...',
      input: '0x68656c6c6f21',
      nonce: '0x15', // 21
      to: '0xf02c1c...',
      transactionIndex: '0x41', // 65
      value: '0xf3dbb76162000', // 4290000000000000
      v: '0x25', // 37
      r: '0x1b5e17...',
      s: '0x4ba697...'
    }
  },
  {
    method: 'eth_getTransactionByBlockHashAndIndex',
    description:
      'Returns information about a transaction by block hash and transaction index position',
    descriptionParams: `DATA, 32 Bytes - hash of a block.
QUANTITY - integer of the transaction index position.`,
    descriptionResult: `Object - A transaction object, or null when no transaction was found:

    blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
    blockNumber: QUANTITY - block number where this transaction was in. null when its pending.
    from: DATA, 20 Bytes - address of the sender.
    gas: QUANTITY - gas provided by the sender.
    gasPrice: QUANTITY - gas price provided by the sender in Wei.
    hash: DATA, 32 Bytes - hash of the transaction.
    input: DATA - the data send along with the transaction.
    nonce: QUANTITY - the number of transactions made by the sender prior to this one.
    to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    transactionIndex: QUANTITY - integer of the transaction's index position in the block. null when its pending.
    value: QUANTITY - value transferred in Wei.
    v: QUANTITY - ECDSA recovery id
    r: QUANTITY - ECDSA signature r
    s: QUANTITY - ECDSA signature s`,
    exampleParams:
      '["0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", "0x0"]',
    exampleResult: {
      blockHash: '0x1d59ff...',
      blockNumber: '0x5daf3b', // 6139707
      from: '0xa7d9dd...',
      gas: '0xc350', // 50000
      gasPrice: '0x4a817c800', // 20000000000
      hash: '0x88df01...',
      input: '0x68656c6c6f21',
      nonce: '0x15', // 21
      to: '0xf02c1c...',
      transactionIndex: '0x41', // 65
      value: '0xf3dbb76162000', // 4290000000000000
      v: '0x25', // 37
      r: '0x1b5e17...',
      s: '0x4ba697...'
    }
  },
  {
    method: 'eth_getTransactionByBlockNumberAndIndex',
    description:
      'Returns information about a transaction by block number and transaction index position',
    descriptionParams: `QUANTITY|TAG - a block number, or the string "earliest", "latest" or "pending"
QUANTITY - the transaction index position`,
    descriptionResult: `Object - A transaction object, or null when no transaction was found:

    blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
    blockNumber: QUANTITY - block number where this transaction was in. null when its pending.
    from: DATA, 20 Bytes - address of the sender.
    gas: QUANTITY - gas provided by the sender.
    gasPrice: QUANTITY - gas price provided by the sender in Wei.
    hash: DATA, 32 Bytes - hash of the transaction.
    input: DATA - the data send along with the transaction.
    nonce: QUANTITY - the number of transactions made by the sender prior to this one.
    to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    transactionIndex: QUANTITY - integer of the transaction's index position in the block. null when its pending.
    value: QUANTITY - value transferred in Wei.
    v: QUANTITY - ECDSA recovery id
    r: QUANTITY - ECDSA signature r
    s: QUANTITY - ECDSA signature s`,
    exampleParams: '["0x29c","0x0" ]',
    exampleResult: {
      blockHash: '0x1d59ff...',
      blockNumber: '0x5daf3b', // 6139707
      from: '0xa7d9dd...',
      gas: '0xc350', // 50000
      gasPrice: '0x4a817c800', // 20000000000
      hash: '0x88df01...',
      input: '0x68656c6c6f21',
      nonce: '0x15', // 21
      to: '0xf02c1c...',
      transactionIndex: '0x41', // 65
      value: '0xf3dbb76162000', // 4290000000000000
      v: '0x25', // 37
      r: '0x1b5e17...',
      s: '0x4ba697...'
    }
  },
  {
    method: 'eth_getTransactionReceipt',
    description:
      'Returns the receipt of a transaction by transaction hash (Receipt not available for pending transactions)',
    descriptionParams: 'DATA, 32 Bytes - hash of a transaction',
    descriptionResult: `Object - A transaction receipt object, or null when no receipt was found:

    transactionHash : DATA, 32 Bytes - hash of the transaction.
    transactionIndex: QUANTITY - integer of the transaction's index position in the block.
    blockHash: DATA, 32 Bytes - hash of the block where this transaction was in.
    blockNumber: QUANTITY - block number where this transaction was in.
    from: DATA, 20 Bytes - address of the sender.
    to: DATA, 20 Bytes - address of the receiver. null when it's a contract creation transaction.
    cumulativeGasUsed : QUANTITY - The total amount of gas used when this transaction was executed in the block.
    gasUsed : QUANTITY - The amount of gas used by this specific transaction alone.
    contractAddress : DATA, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
    logs: Array - Array of log objects, which this transaction generated.
    logsBloom: DATA, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

It also returns either :

    root : DATA 32 Bytes of post-transaction stateroot (pre Byzantium)
    status: QUANTITY either 1 (success) or 0 (failure)`,
    exampleParams:
      '["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"]',
    exampleResult: {
      transactionHash: '0xb90323...',
      transactionIndex: '0x1',
      blockNumber: '0xb',
      blockHash: '0xc6ef2fc...',
      cumulativeGasUsed: '0x33bc',
      gasUsed: '0x4dc',
      contractAddress: '0xb60e8d...',
      logs: [],
      logsBloom: '0x00...',
      status: '0x1'
    }
  },
  {
    method: 'eth_pendingTransactions',
    description: 'Returns the pending transactions list',
    descriptionParams: 'None',
    descriptionResult: 'Array - a list of pending transactions',
    exampleParams: '[]',
    exampleResult: [
      {
        blockHash: '0x000000...',
        blockNumber: null,
        from: '0x28bdb9...',
        gas: '0x204734',
        gasPrice: '0x4a817c800',
        hash: '0x8dfa6a...',
        input: '0x6080604052600',
        nonce: '0x12',
        to: null,
        transactionIndex: '0x0',
        value: '0x0',
        v: '0x3d',
        r: '0xaabc9d...',
        s: '0x69e431...'
      }
    ]
  },
  {
    method: 'eth_getUncleByBlockHashAndIndex',
    description:
      'Returns information about a uncle of a block by hash and uncle index position',
    descriptionParams: `DATA, 32 Bytes - hash of a block
QUANTITY - the uncle's index position
`,
    descriptionResult: `Object - A block object, or null when no block was found:

    number: QUANTITY - the block number. null when its pending block.
    hash: DATA, 32 Bytes - hash of the block. null when its pending block.
    parentHash: DATA, 32 Bytes - hash of the parent block.
    nonce: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    sha3Uncles: DATA, 32 Bytes - SHA3 of the uncles data in the block.
    logsBloom: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    transactionsRoot: DATA, 32 Bytes - the root of the transaction trie of the block.
    stateRoot: DATA, 32 Bytes - the root of the final state trie of the block.
    receiptsRoot: DATA, 32 Bytes - the root of the receipts trie of the block.
    miner: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    difficulty: QUANTITY - integer of the difficulty for this block.
    totalDifficulty: QUANTITY - integer of the total difficulty of the chain until this block.
    extraData: DATA - the "extra data" field of this block.
    size: QUANTITY - integer the size of this block in bytes.
    gasLimit: QUANTITY - the maximum gas allowed in this block.
    gasUsed: QUANTITY - the total used gas by all transactions in this block.
    timestamp: QUANTITY - the unix timestamp for when the block was collated.
    transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    uncles: Array - Array of uncle hashes.`,
    exampleParams:
      '["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"]',
    exampleResult: {
      number: '0x1b4', // 436
      hash: '0xe670ec...',
      parentHash: '0x964625...',
      nonce: '0xe04d29...',
      sha3Uncles: '0x1dcc4d...',
      logsBloom: '0xe670ec...',
      transactionsRoot: '0x56e81f...',
      stateRoot: '0xd5855e...',
      miner: '0x4e65fd...',
      difficulty: '0x027f07', // 163591
      totalDifficulty: '0x027f07', // 163591
      extraData: '0x000000...',
      size: '0x027f07', // 163591
      gasLimit: '0x9f759', // 653145
      gasUsed: '0x9f759', // 653145
      timestamp: '0x54e34e8e', // 1424182926
      transactions: [],
      uncles: ['0x1606e5...', '0xd5145a9...']
    }
  },
  {
    method: 'eth_getUncleByBlockNumberAndIndex',
    description:
      'Returns information about a uncle of a block by number and uncle index position',
    descriptionParams:
      'QUANTITY|TAG - a block number, or the string "earliest", "latest", or "pending"',
    descriptionResult: `Object - A block object, or null when no block was found:

    number: QUANTITY - the block number. null when its pending block.
    hash: DATA, 32 Bytes - hash of the block. null when its pending block.
    parentHash: DATA, 32 Bytes - hash of the parent block.
    nonce: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    sha3Uncles: DATA, 32 Bytes - SHA3 of the uncles data in the block.
    logsBloom: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    transactionsRoot: DATA, 32 Bytes - the root of the transaction trie of the block.
    stateRoot: DATA, 32 Bytes - the root of the final state trie of the block.
    receiptsRoot: DATA, 32 Bytes - the root of the receipts trie of the block.
    miner: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    difficulty: QUANTITY - integer of the difficulty for this block.
    totalDifficulty: QUANTITY - integer of the total difficulty of the chain until this block.
    extraData: DATA - the "extra data" field of this block.
    size: QUANTITY - integer the size of this block in bytes.
    gasLimit: QUANTITY - the maximum gas allowed in this block.
    gasUsed: QUANTITY - the total used gas by all transactions in this block.
    timestamp: QUANTITY - the unix timestamp for when the block was collated.
    transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    uncles: Array - Array of uncle hashes.`,
    exampleParams: '["0x29c", "0x0"]',
    exampleResult: {
      number: '0x1b4', // 436
      hash: '0xe670ec...',
      parentHash: '0x964625...',
      nonce: '0xe04d29...',
      sha3Uncles: '0x1dcc4d...',
      logsBloom: '0xe670ec...',
      transactionsRoot: '0x56e81f...',
      stateRoot: '0xd5855e...',
      miner: '0x4e65fd...',
      difficulty: '0x027f07', // 163591
      totalDifficulty: '0x027f07', // 163591
      extraData: '0x000000...',
      size: '0x027f07', // 163591
      gasLimit: '0x9f759', // 653145
      gasUsed: '0x9f759', // 653145
      timestamp: '0x54e34e8e', // 1424182926
      transactions: [],
      uncles: ['0x1606e5...', '0xd5145a9...']
    }
  },
  {
    method: 'eth_newFilter',
    description:
      'Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.',
    descriptionParams: `Object - the filter options:
fromBlock: QUANTITY|TAG - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
toBlock: QUANTITY|TAG - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
address: DATA|Array, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
topics: Array of DATA, - (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.`,
    descriptionResult: 'QUANTITY - a filter ID',
    exampleParams: `[{
  "fromBlock": "0x1",
  "toBlock": "0x2",
  "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", null, ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"]]
}]`,
    exampleResult: '0x1'
  },
  {
    method: 'eth_newBlockFilter',
    description:
      'Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.',
    descriptionParams: 'None',
    descriptionResult: 'QUANTITY - a filter ID',
    exampleParams: '[]',
    exampleResult: '0x1'
  },
  {
    method: 'eth_newPendingTransactionFilter',
    description:
      'Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.',
    descriptionParams: 'None',
    descriptionResult: 'QUANTITY - a filter ID',
    exampleParams: '[]',
    exampleResult: '0x1'
  },
  {
    method: 'eth_uninstallFilter',
    description:
      "Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.",
    descriptionParams: 'QUANTITY - the filter ID',
    descriptionResult:
      'Boolean - `true` if the filter was successfully uninstalled, otherwise `false`',
    exampleParams: '["0xb"]',
    exampleResult: true
  },
  {
    method: 'eth_getFilterChanges',
    description:
      'Polling method for a filter, which returns an array of logs that occurred since last poll',
    descriptionParams: 'QUANTITY - the filter ID',
    descriptionResult: `Array - Array of log objects, or an empty array if nothing has changed since last poll

For filters created with eth_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. ["0x3454645634534..."].

For filters created with eth_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. ["0x6345343454645..."].

For filters created with eth_newFilter logs are objects with following params:
    removed: TAG - true when the log was removed, due to a chain reorganization. false if its a valid log.
    logIndex: QUANTITY - integer of the log index position in the block. null when its pending log.
    transactionIndex: QUANTITY - integer of the transactions index position log was created from. null when its pending log.
    transactionHash: DATA, 32 Bytes - hash of the transactions this log was created from. null when its pending log.
    blockHash: DATA, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.
    blockNumber: QUANTITY - the block number where this log was in. null when its pending. null when its pending log.
    address: DATA, 20 Bytes - address from which this log originated.
    data: DATA - contains the non-indexed arguments of the log.
    topics: Array of DATA - Array of 0 to 4 32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)
`,
    exampleParams: '["0x16"]',
    exampleResult: [
      {
        logIndex: '0x1',
        blockNumber: '0x1b4',
        blockHash: '0x8216c5...',
        transactionHash: '0xdf829c...',
        transactionIndex: '0x0',
        address: '0x16c578...',
        data: '0x000000...',
        topics: ['0x59ebeb...']
      }
    ]
  },
  {
    method: 'eth_getFilterLogs',
    description: 'Returns an array of all logs matching filter with given ID',
    descriptionParams: 'QUANTITY - the filter ID',
    descriptionResult: `Array - Array of log objects, or an empty array if nothing has changed since last poll

For filters created with eth_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. ["0x3454645634534..."].

For filters created with eth_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. ["0x6345343454645..."].

For filters created with eth_newFilter logs are objects with following params:
    removed: TAG - true when the log was removed, due to a chain reorganization. false if its a valid log.
    logIndex: QUANTITY - integer of the log index position in the block. null when its pending log.
    transactionIndex: QUANTITY - integer of the transactions index position log was created from. null when its pending log.
    transactionHash: DATA, 32 Bytes - hash of the transactions this log was created from. null when its pending log.
    blockHash: DATA, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.
    blockNumber: QUANTITY - the block number where this log was in. null when its pending. null when its pending log.
    address: DATA, 20 Bytes - address from which this log originated.
    data: DATA - contains the non-indexed arguments of the log.
    topics: Array of DATA - Array of 0 to 4 32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)`,
    exampleParams: '["0x16"]',
    exampleResult: [
      {
        logIndex: '0x1',
        blockNumber: '0x1b4',
        blockHash: '0x8216c5...',
        transactionHash: '0xdf829c...',
        transactionIndex: '0x0',
        address: '0x16c578...',
        data: '0x000000...',
        topics: ['0x59ebeb...']
      }
    ]
  },
  {
    method: 'eth_getLogs',
    description: 'Returns an array of all logs matching a given filter object',
    descriptionParams: `Object - The filter options:
fromBlock: QUANTITY|TAG - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
toBlock: QUANTITY|TAG - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
address: DATA|Array, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
topics: Array of DATA, - (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.
blockhash: DATA, 32 Bytes - (optional) With the addition of EIP-234 (Geth >= v1.8.13 or Parity >= v2.1.0), blockHash is a new filter option which restricts the logs returned to the single block with the 32-byte hash blockHash. Using blockHash is equivalent to fromBlock = toBlock = the block number with hash blockHash. If blockHash is present in the filter criteria, then neither fromBlock nor toBlock are allowed.  `,
    descriptionResult: `Array - Array of log objects, or an empty array if nothing has changed since last poll

For filters created with eth_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. ["0x3454645634534..."].

For filters created with eth_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. ["0x6345343454645..."].

For filters created with eth_newFilter logs are objects with following params:
    removed: TAG - true when the log was removed, due to a chain reorganization. false if its a valid log.
    logIndex: QUANTITY - integer of the log index position in the block. null when its pending log.
    transactionIndex: QUANTITY - integer of the transactions index position log was created from. null when its pending log.
    transactionHash: DATA, 32 Bytes - hash of the transactions this log was created from. null when its pending log.
    blockHash: DATA, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.
    blockNumber: QUANTITY - the block number where this log was in. null when its pending. null when its pending log.
    address: DATA, 20 Bytes - address from which this log originated.
    data: DATA - contains the non-indexed arguments of the log.
    topics: Array of DATA - Array of 0 to 4 32 Bytes DATA of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)`,
    exampleParams:
      '[{ "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"] }]',
    exampleResult: [
      {
        logIndex: '0x1',
        blockNumber: '0x1b4',
        blockHash: '0x8216c5...',
        transactionHash: '0xdf829c...',
        transactionIndex: '0x0',
        address: '0x16c578...',
        data: '0x000000...',
        topics: ['0x59ebeb...']
      }
    ]
  },

  { method: 'eth_getProof' },
  { method: 'eth_getWork' },
  { method: 'eth_submitHashrate' },
  { method: 'eth_submitWork' },
  { method: 'shh_addToGroup' },
  { method: 'shh_getFilterChanges' },
  { method: 'shh_getMessages' },
  { method: 'shh_hasIdentity' },
  { method: 'shh_newFilter' },
  { method: 'shh_newGroup' },
  { method: 'shh_newIdentity' },
  { method: 'shh_post' },
  { method: 'shh_uninstallFilter' },
  { method: 'shh_version' },
  { method: 'db_getHex' },
  { method: 'db_getString' },
  { method: 'db_putHex' },
  { method: 'db_putString' },

// Sourcee: https://wiki.parity.io/JSONRPC
 
  { method: 'parity_allTransactionHashes' },
  { method: 'parity_allTransactions' },
  { method: 'parity_call' },
  { method: 'parity_cidV0' },
  { method: 'parity_composeTransaction' },
  { method: 'parity_consensusCapability' },
  { method: 'parity_decryptMessage' },
  { method: 'parity_encryptMessage' },
  { method: 'parity_futureTransactions' },
  { method: 'parity_getBlockHeaderByNumber' },
  { method: 'parity_getBlockReceipts' },
  { method: 'parity_hardwarePinMatrixAck' },
  { method: 'parity_listOpenedVaults' },
  { method: 'parity_listStorageKeys' },
  { method: 'parity_listVaults' },
  { method: 'parity_localTransactions' },
  { method: 'parity_lockedHardwareAccountsInfo' },
  { method: 'parity_releasesInfo' },
  { method: 'parity_signMessage' },
  { method: 'parity_submitWorkDetail' },
  { method: 'parity_verifySignature' },
  { method: 'parity_versionInfo' },
  { method: 'parity_changeVault' },
  { method: 'parity_changeVaultPassword' },
  { method: 'parity_closeVault' },
  { method: 'parity_getVaultMeta' },
  { method: 'parity_newVault' },
  { method: 'parity_openVault' },
  { method: 'parity_setVaultMeta' },
  { method: 'parity_accountsInfo' },
  { method: 'parity_checkRequest' },
  { method: 'parity_defaultAccount' },
  { method: 'parity_generateSecretPhrase' },
  { method: 'parity_hardwareAccountsInfo' },
  { method: 'parity_listAccounts' },
  { method: 'parity_phraseToAddress' },
  { method: 'parity_postSign' },
  { method: 'parity_postTransaction' },
  { method: 'parity_defaultExtraData' },
  { method: 'parity_extraData' },
  { method: 'parity_gasCeilTarget' },
  { method: 'parity_gasFloorTarget' },
  { method: 'parity_minGasPrice' },
  { method: 'parity_transactionsLimit' },
  { method: 'parity_devLogs' },
  { method: 'parity_devLogsLevels' },
  { method: 'parity_chain' },
  { method: 'parity_chainStatus' },
  { method: 'parity_gasPriceHistogram' },
  { method: 'parity_netChain' },
  { method: 'parity_netPeers' },
  { method: 'parity_netPort' },
  { method: 'parity_nextNonce' },
  { method: 'parity_pendingTransactions' },
  { method: 'parity_pendingTransactionsStats' },
  { method: 'parity_registryAddress' },
  { method: 'parity_removeTransaction' },
  { method: 'parity_rpcSettings' },
  { method: 'parity_unsignedTransactionsCount' },
  { method: 'parity_enode' },
  { method: 'parity_mode' },
  { method: 'parity_nodeKind' },
  { method: 'parity_nodeName' },
  { method: 'parity_wsUrl' }
];

export default {
  geth,
};
