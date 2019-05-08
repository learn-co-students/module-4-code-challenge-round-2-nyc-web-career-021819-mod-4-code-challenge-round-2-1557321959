import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

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

  render() {
    return (
      <div>
        <Search changeInput={this.changeInput} />
        <TransactionsList input={this.state.input} transactions ={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
