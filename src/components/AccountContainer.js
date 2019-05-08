import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const API = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  state={
    transactions: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange(event) {
    console.log("typing!")
  }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search onChange={this.handleChange(event)}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

// Ran out of time and did not complete search feature.
export default AccountContainer
