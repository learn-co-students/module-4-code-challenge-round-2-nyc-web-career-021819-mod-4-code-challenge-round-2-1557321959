import React from 'react'

class Search extends React.Component {

  state = {
    query: ''
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    }, () => this.props.handleInputChange(this.state.query))

  }

  render () {
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleChange}
          value={this.state.query}
          />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
