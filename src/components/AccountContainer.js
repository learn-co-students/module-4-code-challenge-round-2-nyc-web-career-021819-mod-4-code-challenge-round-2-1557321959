import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  // }

  state ={ 
    transactions: [],
    input: ""
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions
      })

    })
  }

  changeInput= (input) => {
    this.setState({
      input
    })
  }

  handleChange(input) {
    const filteredT = this.state.transactions.filter(transaction => transaction.includes(this.state.input))
    console.log(filteredT)
    this.setState({
      transactions: filteredT
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <Search changeInput={this.changeInput} />
        <TransactionsList input={this.state.input} handleChange={this.handleChange} transactions ={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
