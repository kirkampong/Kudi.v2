import React, { Component } from 'react'
import {Card, Row, Col} from "react-bootstrap";
import dai from 'assets/img/dai-logo.png'
import './Deposit.css'

class Main extends Component {

  render() {
    return (
      <div id="content" className="mt-3">
        <div class="card mb-3">
          <img class="mx-auto mt-3" src={dai} height="92" width="90"  alt=""/>
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
                  <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} DAI</td>
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
                  <button
                    className="input-group-text dropdown-toggle" type="button" data-toggle="dropdown" 
                    //onClick={(event) => {event.preventDefault()}}
                  >
                    <img src={dai} height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; DAI
                  </button>
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
