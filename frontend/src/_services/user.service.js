/** Import des modules nécessaires */
import Axios from './caller.service'


let getAllUsers = () => {
    return Axios.get('/user')
}

let getUser = (uid) => {
    return Axios.get('/user/'+uid)
}

let updateUser = (user) => {
    return Axios.patch('/user/'+user.id, user)
}

let createUser = (user) => {
    return Axios.put('/user', user)
}

let deleteUser = (uid) => {
    return Axios.delete('/user/'+uid)
}

export const userService = {
    getAllUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser,
}