import React from 'react'
import Transaction from './Transaction'

// const renderTransactions = ()
// => {
//   return (this.props.transactions.map((trans) => {
//     <Transaction trans={trans} key={trans.id} />
// } 



const TransactionsList = (props) => {
console.log(props)
  const renderTransactions = () => {
    // console.log()
    return props.transactions.map(trans => (
      <Transaction trans={trans} key={trans.id} />
    ))
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {renderTransactions()}

      </tbody>
    </table>
  )
}

export default TransactionsList
