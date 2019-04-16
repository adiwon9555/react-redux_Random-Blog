import axios from "axios";

const PRE_URL="http://localhost:9001"
export default {
    get:function(post_url){
        const url=PRE_URL.concat(post_url)
        return axios.get(url)
    },
    post:function(post_url,data){
        const url=PRE_URL.concat(post_url)
        return axios.post(url,data)
    },
    patch:function(post_url,data){
        const url=PRE_URL.concat(post_url)
        return axios.patch(url,data)
    },
    delete:function(post_url){
        const url=PRE_URL.concat(post_url)
        return axios.delete(url)
    }
    
}