import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import hornedArray from './data.json'




class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Main hornedArray={hornedArray[0]} />
        <Footer />
      </div>
    );
  }
}
export default App;
