import React from 'react'

const Search = (props) => {

  const handleChange = ( e ) => {
    props.changeInput(e.target.value)
  }

  return (
    <div className="ui huge fluid icon input">
      <input onChange={handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
