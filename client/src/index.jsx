import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import AnimalsList from './components/AnimalsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  queryApi () {

  }

  render () {
    return (
      <div>
        <Search onSearch={this.queryApi}/>
        <AnimalsList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
