import { FOUND_BAD_WORD, BLOGS_LOADED, BLOG_ADDED, BLOG_UPDATED, BLOG_DELETED } from "../constants/action-types";
import blogService from "../services/blogService";


export function displayErrorMessage(payload) {
    return {
        type: FOUND_BAD_WORD,
        payload
    }
}

export function getBlogs() {
    return function (dispatch) {
        blogService.get("/blogs")
            .then(res => {
                dispatch({ type: BLOGS_LOADED, payload: res.data })
            })
    }
}

export function addBlog(data,callback) {
    return function (dispatch) {
        blogService.post("/blog",data)
            .then(res => {
                dispatch({ type: BLOG_ADDED, payload: res.data })
                callback()
            })
    }
}


export function upVote(id) {
    return function (dispatch) {
        blogService.patch("/blog/"+id)
            .then(res => {
                dispatch({ type: BLOG_UPDATED, payload: res.data })
            })
    }
}

export function updateBlog(data) {
    return function (dispatch) {
        blogService.patch("/blog")
            .then(res => {
                dispatch({ type: BLOG_UPDATED, payload: res.data })
            })
    }
}
export function deleteBlog(id) {
    return function (dispatch) {
        blogService.delete("/blog/"+id)
            .then(res => {
                dispatch({ type: BLOG_DELETED, payload: res.data })
            })
    }
}