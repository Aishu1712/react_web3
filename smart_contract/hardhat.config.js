

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/TO0PKIish7NaTh-NeTkB2mJpEa8fB087',
      accounts: ['69c251d6c034cb238dbfa1bbc0a268aca1a64638cdef917d6f3933fa0ed39281']
    }
  }
}