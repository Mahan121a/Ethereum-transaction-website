
// require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     sepolia: {
//       url: 'https://eth-sepolia.g.alchemy.com/v2/PGNKoB0rx_yfJtk4XX8maz8_7j9_GkUh',
//       accounts: ['45d0fabd6360235f8c17158b739b43c53eb74a836ea2323efc84301bef52e0f3'],
//     },
//   },
// };



require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia:{
      chainId: 11155111,
      url:'https://eth-sepolia.g.alchemy.com/v2/PGNKoB0rx_yfJtk4XX8maz8_7j9_GkUh',
      accounts: ['45d0fabd6360235f8c17158b739b43c53eb74a836ea2323efc84301bef52e0f3'],
      timeout: 10000000,
    },

    
    
  }
  
}