import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  state = {
    input: ''
  }

  onChange = (e) => {
    this.setState({ input: e.target.value })
    console.log(e.target.value)
  }


  render() {
    console.log(this.props.transactions)
    let filteredTrans = this.props.transactions.filter(trans => trans.description.includes(this.state.input) || trans.category.includes(this.state.input))
    return (
      <div>
        <Search onChange={this.onChange} />
        <TransactionsList transactions={filteredTrans} />
      </div>
    )
  }
}

export default AccountContainer
