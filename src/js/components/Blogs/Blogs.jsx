import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getBlogs,upVote, deleteBlog } from "../../action/action"
import {Link,Redirect} from "react-router-dom"

const mapStateToProps = (state) => {
    return { blogs: state.blogs };
}

class Blogs extends Component {
    componentDidMount() {
        this.props.getBlogs();
    }
    convertDate(dateInt) {
        return new Date(dateInt).toLocaleString();
    }
    
    render() {
        const { blogs } = this.props;
        return (
            <div className="row">
                {blogs.sort((a,b)=>b.createdAt-a.createdAt).map(blog => (
                    <div key={blog._id} className="col-sm-4">
                        <div className="card" style={{ margin: '2%' }}>
                            <div className="card-body">
                                <h5 className="card-title">{blog.text}</h5>
                            </div>
                            <div className="card-footer text-left">
                                <span className="text-muted">{blog.vote}&nbsp;&nbsp;
                                <button onClick={()=>this.props.upVote(blog._id)}>
                                        <i style={{ fontSize: '24px' }}   className="fa">&#xf087;</i>&nbsp;&nbsp;Like
                                </button>
                                </span>
                                <span className="text-muted" style={{ marginLeft: '3%' }}>{this.convertDate(blog.createdAt)}</span>
                                <button onClick={()=>this.props.deleteBlog(blog._id)} style={{ marginLeft: '4%' }} className="fa fa-trash"></button>
                            </div>
                        </div>
                    </div >
                ))}
            </div >
        )
    }
}

Blogs.propTypes = {
    blogs: PropTypes.array.isRequired,
    getBlogs: PropTypes.func.isRequired,
    upVote: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getBlogs,upVote,deleteBlog })(Blogs)