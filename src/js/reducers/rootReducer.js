import { FOUND_BAD_WORD, DATA_LOADED, BLOGS_LOADED, BLOG_UPDATED, BLOG_DELETED, BLOG_ADDED, SIDEBAR_TOGGLE, ADDPOST_BUTTON_ENABLE } from "../constants/action-types";

const initialState = {
    blogs: [],
    message: "",
    remoteArticles: [],
    sidebarVisible:false,
    addPostButton:true
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case BLOG_ADDED:
            return Object.assign({}, state, {
                blogs: state.blogs.concat(action.payload)
            })
        case FOUND_BAD_WORD:
            return Object.assign({}, state, {
                message: action.payload
            })
        case BLOGS_LOADED:
            return Object.assign({}, state, {
                blogs: action.payload
            })
        case BLOG_UPDATED:
            const updatedBlogs = state.blogs.map(blog => {
                if (blog._id === action.payload._id) {
                    return action.payload;
                }
                return blog;
            })
            return Object.assign({}, state, {
                blogs: updatedBlogs
            })
        case BLOG_DELETED:
            const newBlogs = state.blogs.filter(blog => {
                if (blog._id === action.payload._id) {
                    return false
                }
                return true;
            })
            return Object.assign({}, state, {
                blogs: newBlogs
            })
        case SIDEBAR_TOGGLE:
            return Object.assign({}, state, {
                sidebarVisible: action.payload
            })
        case ADDPOST_BUTTON_ENABLE:
            return Object.assign({}, state, {
                addPostButton: action.payload
            })
        default:
            return state;
    }

}

export default rootReducer;