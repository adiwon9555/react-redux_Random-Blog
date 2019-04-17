import React, { Component } from 'react';
import './App.css';
import Blogs from './js/components/Blogs/Blogs';
import Navbar from './js/components/Navbar/Navbar';


class App extends Component {
  // componentDidMount(){
  //   this.props.history.push('/blogs')
  // }
  render() {

    return (
      <>
        <div>
          <Navbar {...this.state} {...this.props}/>
        </div>
        <div className="container" style={{paddingTop:"65px"}}>
          <Blogs/>
        </div>
        
      </>
    );
  }
}

export default App;
