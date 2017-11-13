import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import AnimalsList from './components/AnimalsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    }
  }

  search (zip, animalType) {
    // post request to server
    // server will then send a get request to petfinder api

    console.log(`${zip} and ${animalType} was searched`);

    var jsonData = {
      zip: zip,
      animalType: animalType
    };

    $.ajax({
      url: '/animals',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(jsonData)
    }).done(function(data, textStatus){
      console.log('search complete ', textStatus);
      console.log('search complete', data);
    }).fail(function(textStatus, error){
      if (error) { console.error(error); }
    });


  }

  render () {
    return (
      <div>
        <Search onSearch={this.search.bind(this)}/>
        <AnimalsList animals={this.state.animals} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
