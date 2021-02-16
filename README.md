**Copyright (c) 2020 IdeationX**  
Befoer attempting to access or use this code please read the LICENSE for terms of use.

**LIGDI**

- A Self sustaining crypto currency called LIGDI 
- Backed by smart contracts and blockchain-secure
- Users can deposit their own crypto (DaiCrypto & soon many others, including BTC) and earn interest in LIGDI


**Dependencies:**
* Ganache - Blockchain spinup (depends on truffle)
* Trufffle Framework - Smart contract management [npm install --g truffle@5.1.39]
* MetaMask - Ethereum Wallet integration for google chrome browser. Login Required

**Tokens:** (ERC20 tokens)
* LigdiToken
* DaiToken (Mock Token)

**Smart Contracts:**
* Ligdi Contract
* Dai Contract
* **LigdiFarm Contract**:

*transferFrom* is a delegated form of the *transfer* function which allows me to move tokens on behalf of an investor


**Turorials:**
* Run *'truffle compile'* to compile contracts into ./src/abis
* Run *'truffle migrate'* to deploy smart contracts to THE blockchain using migration scripts, add *--reset* to replace previous contracts
* Run *'truffle console'* : JS blockchain environment THEN *tokenFarm = await LigdiFarm.deployed(); tokenFarm;* to view contract;  
  *.adress and .name* are other fields for out contract
* Run *'truffle test'* : run tests
* Run *'truffle exec scripts/issue-tokens.js'* : run script
* npm run start : spin up node server



Eg:
Context: Our contracts in ... and migrations ... blah blah [expained]

truffle console;
mDai = await DaiToken.deployed()  
accounts = await web3.eth.getAccounts()  
balance = await mDai.balanceOf(accounts[1])  
balance.toString()  
readableBalance = web3.utils.fromWei(balance) (toWei works too)  
