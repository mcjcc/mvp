import React from 'react';

class Search extends React.Component {
  render () {
    return (
      <div>
        <label>Location</label>
        <input type="text" />
        <label>Type</label>
        <select>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <label>Breed</label>
        <select>
          <option>Any</option>
          <option>Italian Greyhound</option>
        </select>
        <button>Find some animals!</button>
      </div>
    )
  }

}

export default Search;
