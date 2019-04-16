import React, { Component } from 'react';
import './App.css';
import Blogs from './js/components/Blogs/Blogs';
import Navbar from './js/components/Navbar/Navbar';


class App extends Component {
  render() {

    return (
      <>
        <div>
          <Navbar {...this.state}/>
        </div>
        <div className="container" style={{paddingTop:"65px"}}>
          <Blogs />
        </div>
        
      </>
    );
  }
}

export default App;
