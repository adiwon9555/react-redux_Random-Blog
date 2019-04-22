import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom"
import Blogs from './js/components/Blogs/Blogs';
import Navbar from './js/components/Navbar/Navbar';
import MySidebar from './js/components/Sidebar/MySidebar';
import routes from './js/routes';



class App extends Component {
  // componentDidMount(){
  //   this.props.history.push('/blogs')
  // }
  render() {

    return (
      <>
      
      <MySidebar>
        
      <Navbar {...this.state} {...this.props}/>
          
        
        <div className="container" style={{paddingTop:"65px",minHeight:'99vh'}} >
          
          {routes}
        </div>
      </MySidebar>
      </>
    );
  }
}

export default App;
