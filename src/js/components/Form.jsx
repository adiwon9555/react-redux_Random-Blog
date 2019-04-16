import React,{Component} from "react"
import PropTypes from "prop-types"
import { addArticle } from "../action/action";
import uuid from "uuid"
import {connect} from "react-redux"

const mapDispatchToProps=(dispatch)=>{
    return {addArticle:article=>{
        return dispatch(addArticle(article))
    }};
}
const mapStateToProps = (state) => {
    return { message: state.message };
}
class Form extends Component{
    constructor(){
        super()
        this.state={
            title:""
        }
    }

    handleChange(event){
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.addArticle({
            title:this.state.title,
            id:uuid()
        })
        this.setState({
            title:""
        })
    }
    render(){
        let {title}=this.state;
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label  htmlFor="title">Title</label>
                    <input type="text" 
                    className="form-control" 
                    id="title"
                    onChange={this.handleChange.bind(this)}
                    value={title}/>
                </div>
                <button type="submit" className="btn btn-success btn-lg">SAVE</button>
                <div>{this.props.message}</div>
            </form>
        )
    }
}

Form.propTypes={
    addArticle:PropTypes.func.isRequired,
    message:PropTypes.string.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)