import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      search: ""
    }

  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  componentDidMount = () => {
    this.fetchAndSetTransactions()
  }

  fetchAndSetTransactions = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res=>res.json())
    .then(allTransactions => {
      this.setState({
        transactions: allTransactions
      })
    })
  }

  renderTransactionsByFilter = () => {
    let filteredTransactionArray = this.state.transactions.filter((transaction)=> {
      return (transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.search.toLowerCase()))
    })
    return filteredTransactionArray
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} searchState={this.state.search}/>
        <TransactionsList transactions={this.renderTransactionsByFilter(this.state.transactions)}/>
      </div>
    )
  }
}

export default AccountContainer
