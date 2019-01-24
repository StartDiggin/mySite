import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../css/style.css';

class App extends Component {
  render() {
    return (
     <>
     <Header />
      <Main />
    </>
    );
  }
}

export default App;
