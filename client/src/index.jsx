import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/Search.jsx';
import AnimalsList from './components/AnimalsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Search />
        <AnimalsList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
