import React from 'react';
import {Route} from "react-router-dom"
import App from "../App";
import Blogs from "./components/Blogs/Blogs";
import User from "./components/User/User";
import About from './components/About/About';

export default (
    <div>
    <Route exact path='/' component={App}></Route>
    {/* <Route path='/blogs' component={Blogs}></Route> */}
    <Route path='/user' component={User}></Route>
    <Route path='/about' component={About}></Route>
    </div>    
)