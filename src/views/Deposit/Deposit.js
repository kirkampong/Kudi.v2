import React, { Component , useState} from 'react'
import {Card, Row, Col, Dropdown} from "react-bootstrap";
import kudiLogo from './kudi-logo.png'
import daiLogo from './dai-logo.png'
import ethLogo from './eth-logo.png'
import btcLogo from './btc-logo.png'
import bnbLogo from './bnb-logo.png'
import adaLogo from './ada-logo.png'
import './Deposit.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: daiLogo,
      symbol: "DAI"
    }
  }

  render() {

    return (
      <div id="content" className="mt-3">
        <div class="card mb-3">
          <img class="mx-auto mt-3" src={kudiLogo} height="192" width="220"  alt=""/>
          <div class="card-body">
            <table className="table table-borderless text-muted text-center">
              <thead className="centerOverride">
                <tr>
                  <th>Deposit Balance</th>
                  <th>Reward Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} {this.state.symbol}</td>
                  <td>{window.web3.utils.fromWei(this.props.ligdiTokenBalance, 'Ether')} KUDI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        

        <div className="card bg-light mb-4" >
          <div className="card-body">
            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left"><b>Deposit Tokens</b></label>
                <span className="float-right text-muted">
                  Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      data-toggle="dropdown"
                      id="depositDropdownMenu"
                      variant="default"
                      className="m-0"
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
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">DEPOSIT</button>
            </form>
            <button
              type="submit"
              className="btn btn-secondary btn-block"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                WITHDRAW
              </button>

          </div>
        </div>

      </div>
    );
  }
}

export default Main;
