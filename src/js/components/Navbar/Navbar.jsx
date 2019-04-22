import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './Navbar.scss'
import {addBlog, toggleSidebar, toggleAddPostEnable} from "../../action/action"
import { connect } from "react-redux"
import {Link,Redirect} from "react-router-dom"
import MyModal from "../MyModal/MyModal";

const mapStateToProps=(state)=>{
    return {sidebarVisible:state.sidebarVisible,
        addPostButton:state.addPostButton}
}


class Navbar extends Component {
    constructor() {
        super()
        // this.textInput = React.createRef();
        this.state={
            post:"",
            modalOpen:false
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
        this.props.addBlog(data,()=>{
            // if(window.location.pathname!=='/'){
            //     window.location="/"
            // }
            
        });
        this.setState({
            post:"",
            modalOpen:false
        })
    }
    

    render() {
        const { articles } = this.props;
        let li;
        if(this.props.addPostButton==true){
            li=<li className="active"  onClick={()=>this.setState({modalOpen:true})}><a >Add Post</a></li>
        }
        return (
            
            <>
                <ul>
                    <li onClick={()=>this.props.toggleSidebar(!this.props.sidebarVisible)} className='l'><a>User</a></li>
                    <li className='l' onClick={()=>this.props.toggleAddPostEnable(true)}><Link to="/" >Home</Link></li>
                    <li className='l' onClick={()=>this.props.toggleAddPostEnable(false)}><Link to="/about" >About</Link></li>
                    {li}
                </ul>
                <MyModal 
                    modalOpen={this.state.modalOpen}
                    handleClose={()=>console.log("Modal Closed")}
                    closeModal={()=>this.setState({modalOpen:false})}
                    onSubmit={()=>this.addPost()}
                    header={<>Your Blog</>}
                    content={
                    <div className="form-group">
                        <label htmlFor="ta">Enter Your Text</label>
                            <textarea autoFocus={true} required
                            onChange={this.handlePostChange.bind(this)}
                            value={this.state.post}
                            className="form-control"
                            id="ta"
                            // ref={this.textInput}
                            rows="5"></textarea>
                    </div>}
                    >
                </MyModal>
            </>
        )
    }
}

Navbar.propTypes = {
    addBlog: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{addBlog,toggleSidebar,toggleAddPostEnable})(Navbar)