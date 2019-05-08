import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      input: ''
    }
  }

  handleChange = (event) => {
    // your code here
    this.setState({
      input: event.target.value
    })
  }


  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
      .then(transactions => this.setState({
        transactions: transactions
      }))
  }

  filterTransactions = () => { 
    // console.log(this.state)
    return this.state.transactions.filter((tran) =>
      tran.description.includes(this.state.input) || tran.category.includes(this.state.input))
  }
  

  render() {

    
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.filterTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
