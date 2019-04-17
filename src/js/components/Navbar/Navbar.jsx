import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './Navbar.scss'
import {addBlog} from "../../action/action"
import { connect } from "react-redux"
import {Link} from "react-router-dom"



class Navbar extends Component {
    constructor() {
        super()
        this.state={
            post:""
        }
    }
    handlePostChange(event){
        const post=event.target.value;
        this.setState({
            post
        })
    }
    addPost(){
        const {post}=this.state
        const data={text:post}
        this.props.addBlog(data);
        this.setState({
            post:""
        })
        this.props.history.push("/")
    }

    render() {
        const { articles } = this.props;
        return (
            <>
                <ul>
                    <li className='l'><Link to="/user" >User</Link></li>
                    <li className='l'><Link to="/" >Home</Link></li>
                    <li className='l'><Link to="/about" >About</Link></li>
                    <li className="active" data-toggle="modal" data-target="#exampleModal"><a >Add Post</a></li>
                </ul>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title pull-left">Your Blog</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="ta">Enter Your Text</label>
                                    <textarea autoFocus="true" required 
                                    style={{ width: "27rem" }} 
                                    onChange={this.handlePostChange.bind(this)}
                                    value={this.state.post} 
                                    className="form-control" 
                                    id="ta" 
                                    rows="5"></textarea>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" onClick={this.addPost.bind(this)} data-dismiss="modal" className="btn btn-primary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Navbar.propTypes = {
    addBlog: PropTypes.func.isRequired
}

export default connect(null,{addBlog})(Navbar)