import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Navbar from "../Navbar/Navbar";

// const mapStateToProps = (state) => {
//     return { blogs: state.blogs };
// }

class User extends Component {


    render() {
        return (
            <>
            <div>
                <Navbar {...this.state} {...this.props} />
            </div>
            <div className="container" style={{paddingTop:"65px"}}>
                <div>User Page</div>
            </div>

            </>
        )
    }
}

User.propTypes = {
    // blogs: PropTypes.array.isRequired,
    // getBlogs: PropTypes.func.isRequired,
    // upVote: PropTypes.func.isRequired
}

export default connect(null)(User)