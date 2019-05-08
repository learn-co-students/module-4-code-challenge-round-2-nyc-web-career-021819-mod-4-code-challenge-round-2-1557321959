import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state={
    transactions: [],
    searchInput: ''
  }

  getTransctions(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data =>{
      this.setState({
        transactions: data
      })
    })
  }

  componentDidMount(){
    this.getTransctions()
  }


  handleChange=e=>{
    this.setState({
      searchInput: e.target.value
    })
  }


  renderSearchedTrans=()=>{
    if(!this.state.searchInput){
      return this.state.transactions
    }else{
    return [...this.state.transactions].filter(t => t.description.toLowerCase().includes(this.state.searchInput) || t.category.toLowerCase().includes(this.state.searchInput)
  )}
  }

  render() {
    console.log(this.renderSearchedTrans());
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList trans={this.renderSearchedTrans()}/>
      </div>
    )
  }
}

export default AccountContainer
