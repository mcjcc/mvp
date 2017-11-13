import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      zip: '',
      animalType: ''
    }
  }

  componentDidMount () {
    this.setState({
      animalType: $('select option').val()
    })
  }

  onInputTextChange (e) {
    this.setState({
      zip: e.target.value
    });
  }

  onSelectChange (e) {
    this.setState({
      animalType: e.target.value
    })
  }

  search() {
    console.log('search from search.jsx called');
    this.props.onSearch(this.state.zip, this.state.animalType);
  }

  render () {
    return (
      <div>
        <label>Location</label>
        <input type="text" onChange={this.onInputTextChange.bind(this)} />
        <label>Type</label>
        <select onChange={this.onSelectChange.bind(this)} >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <button onSubmit={this.search.bind(this)} onClick={this.search.bind(this)}>Find some animals!</button>
      </div>
    )
  }

}

export default Search;

//
//
// import React from 'react';
//
// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: ''
//     }
//   }
//
//   onChange (e) {
//     this.setState({
//       term: e.target.value
//     });
//   }
//
//   search() {
//     this.props.onSearch(this.state.term);
//   }
//
//   render() {
//     return (<div>
//       <h4>Add more repos!</h4>
//       Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
//     <button onClick={this.search.bind(this)}> Add Repos </button>
//     </div>)
//   }
// }
//
// export default Search;
