import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Navbar from "../Navbar/Navbar";

// const mapStateToProps = (state) => {
//     return { blogs: state.blogs };
// }

class About extends Component {


    render() {
        
        return (
            <>
            <div>About Page</div>

            </>
        )
    }
}

About.propTypes = {
    // blogs: PropTypes.array.isRequired,
    // getBlogs: PropTypes.func.isRequired,
    // upVote: PropTypes.func.isRequired
}

export default connect(null)(About)