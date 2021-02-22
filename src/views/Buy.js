import React, { Component } from 'react';
import {Dropdown} from "react-bootstrap";
import Web3 from 'web3';
import DaiTokenMock from '../abis/DaiToken.json'
import daiLogo from 'assets/img/dai-logo.png';
import kudiLogo from 'assets/img/kudi-logo.png';
import ethLogo from './Deposit/eth-logo.png'
import btcLogo from './Deposit/btc-logo.png'
import bnbLogo from './Deposit/bnb-logo.png'
import adaLogo from './Deposit/ada-logo.png'


class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const daiTokenAddress = "0x7b729B07EcBDEd8879Acf997aAF6546926982830" // Replace DAI Address Here
    const daiTokenMock = new web3.eth.Contract(DaiTokenMock.abi, daiTokenAddress)
    this.setState({ daiTokenMock: daiTokenMock })
    const balance = await daiTokenMock.methods.balanceOf(this.state.account).call()
    this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
    const transactions = await daiTokenMock.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } })
    this.setState({ transactions: transactions })
    console.log(transactions)
  }

  transfer(recipient, amount) {
    this.state.daiTokenMock.methods.transfer(recipient, amount).send({ from: this.state.account })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      daiTokenMock: null,
      balance: 0,
      transactions: [],
      logo: daiLogo,
      symbol: "DAI"
    }

    this.transfer = this.transfer.bind(this)
  }
        
  render() {
    return (
      <div>
        
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" style={{ width: "500px" }}>
                <Dropdown>
                    <Dropdown.Toggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      data-toggle="dropdown"
                      id="depositDropdownMenu"
                      variant="default"
                      className="m-0"
                      style={{width:"-webkit-fill-available"}}
                    >
                    <span className="no-icon">
                      <img src={this.state.logo} height='32' alt=""/>&nbsp; Coin
                    </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu aria-labelledby="depositDropdownMenu">
                      <Dropdown.Item
                        href="#pablo"
                        onClick={(e) => this.setState({logo: daiLogo, symbol:"DAI"})}
                      >
                        DAI (Test)
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#pablo"
                        onClick={(e) => this.setState({logo: kudiLogo, symbol:"KUDI"})}
                      >
                        KUDI
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#pablo"
                        onClick={(e) => this.setState({logo: btcLogo, symbol:"BTC"})}
                      >
                        Bitcoin (BTC)
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#pablo"
                        onClick={(e) => this.setState({logo: ethLogo, symbol:"ETH"})}
                      >
                        Ethereum (ETH)
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#pablo"
                        onClick={(e) => this.setState({logo: bnbLogo, symbol:"BNB"})}
                      >
                        BinanceCoin (BNB)
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#pablo"
                        onClick={(e) => this.setState({logo: adaLogo, symbol:"ADA"})}
                      >
                        Cardano (ADA)
                      </Dropdown.Item>
                      
                    </Dropdown.Menu>
                  </Dropdown>

                <br></br>
                <div class="card mb-3">
                  <img class="mx-auto mt-3" src={kudiLogo} height="192" width="220"  alt=""/>
                  <div class="card-body">
                    <h1>{this.state.balance} {this.state.symbol}</h1>
                  </div>
                </div>
                
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const recipient = this.recipient.value
                  const amount = window.web3.utils.toWei(this.amount.value, 'Ether')
                  this.transfer(recipient, amount)
                }}>
                  <div className="form-group mr-sm-2">
                    <input
                      id="recipient"
                      type="text"
                      ref={(input) => { this.recipient = input }}
                      className="form-control"
                      placeholder="Recipient Address"
                      required />
                  </div>
                  <div className="form-group mr-sm-2">
                    <input
                      id="amount"
                      type="text"
                      ref={(input) => { this.amount = input }}
                      className="form-control"
                      placeholder="Amount"
                      required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Send</button>
                </form>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Recipient</th>
                      <th scope="col">value</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.transactions.map((tx, key) => {
                      return (
                        <tr key={key} >
                          <td>{tx.returnValues.to}</td>
                          <td>{window.web3.utils.fromWei(tx.returnValues.value.toString(), 'Ether')}</td>
                        </tr>
                      )
                    }) }
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
