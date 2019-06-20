 async function init_web3() {
    //Web3 init
    /*
    if (typeof web3 != 'undefined') {
        web3 = new Web3(web3.currentProvider) // what Metamask injected
    } else {
        // Instantiate and set Ganache as your provider
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
      */
  var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    //Load accounts
    window.accounts = ["0xceb3e2d65bfc024121a33d71d3f3a78035ab345e"];  //your account address here
    console.log("Loaded accounts");

    // The interface definition for your smart contract (the ABI)
    window.pm = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			}
		],
		"name": "createParticipant",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_u_id",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getParticipantName",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"name": "_userName",
				"type": "string"
			},
			{
				"name": "_passWord",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "uid",
				"type": "uint256"
			},
			{
				"name": "uname",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			}
		],
		"name": "userLogin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
])

	 window.pm.options.address = '0xbf330bc011341e3fcaea69649b178555f90f95bb'     //your deployed contract address here

}
export {
  init_web3
}
