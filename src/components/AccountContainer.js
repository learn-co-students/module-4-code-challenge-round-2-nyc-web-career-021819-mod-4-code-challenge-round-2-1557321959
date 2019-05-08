import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
  //
  //   // get a default state working with the data imported from TransactionsData
  //   // use this to get the functionality working
  //   // then replace the default transactions with a call to the API
  //
  // }

  state = {
    transactions: [],
    newTransactions: []
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data,
        newTransactions: data
      })
    })
  }

  handleInputChange = (query) => {
    const newTransactions = this.state.transactions.filter(transaction => {
      return (transaction.description.toLowerCase().includes(query.toLowerCase()) || transaction.category.toLowerCase().includes(query.toLowerCase()))
    })
    this.setState({
      newTransactions: newTransactions
    })
  }

  render() {
    console.log(this.state.transactions);
    return (
      <div>
        <Search handleInputChange={this.handleInputChange}/>
        <TransactionsList transactions={this.state.newTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
