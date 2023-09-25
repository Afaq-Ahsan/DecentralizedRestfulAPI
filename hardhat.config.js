require('@nomicfoundation/hardhat-toolbox');

require('dotenv').config();

const { PRIVATE_KEY, URL } = process.env;

module.exports = {
  solidity: '0.8.19',
  defaultNetwork: 'polygon_mumbai',
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
