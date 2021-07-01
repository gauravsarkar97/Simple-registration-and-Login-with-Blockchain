# Simple-registration-and-Login-with-Blockchain

Welcome to Blockchain Technology - the technology of the future. Here is a simple registration and login form which runs on an Ethereum Blockchain.
http://www.ethdocs.org/en/latest/

Thus, it completely eliminates the use of any standard database. All user data is stored directly on the blockchain.

The process of storing and validating user details during login is done through a piece of code called as a "Smart Contract".
The Smart Contract is written in a language called Solidity. 
The details can be found here : https://solidity.readthedocs.io/en/v0.5.3/index.html

For running the project:

1. Clone the project

2. Install npm and nodejs. Open terminal in the directory of the project and install truffle. Instructions are here: https://www.trufflesuite.com/docs/truffle/getting-started/installation

3. Add web3js - an Ethereum JavaScript API

4. Setup a private Blockchain using either Geth or Ganache.

5. Use the Remix-Ethereum IDE to deploy the contract. Make sure that the IDE is connected to the private blockchain node. For this choose "Web3 provider" as Environment.

6. Copy the deployed contract address, contract ABI and the account address in the utils.js file and register.js file.

7. In the project directory, run command "http-server" to start the server. You will see 3 addresses where the server is available.

8. Choose anyone and copy-paste the address in any browser. The web interface should be working fine and if all previous steps have worked/executed correctly, you can transact with the smart contract deployed in the blockchain.
