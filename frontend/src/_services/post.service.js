/** Import des modules nécessaires */
import Axios from './caller.service'


let getAllPosts = () => {
    return Axios.get('/post')
}

let getPost = (pid) => {
    return Axios.get('/post/'+pid)
}

let updatePost = (post) => {
    return Axios.patch('/post/'+post.id, post)
}

let createPost = (post) => {
    return Axios.put('/post', post)
}

let deletePost = (pid) => {
    return Axios.delete('/post/'+pid)
}

export const postService = {
    getAllPosts,
    getPost,
    updatePost,
    createPost,
    deletePost,
}