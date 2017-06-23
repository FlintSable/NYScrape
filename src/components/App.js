import React, { Component } from 'react';
import Header from './header/Header';
import Section from './section/Section';
import Search from './search/Search';
import Results from './results/Results'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <Results/>
      </div>
    );
  }
}

export default App;
