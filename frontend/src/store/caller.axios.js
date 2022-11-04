import axios from 'axios';

let Axios = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export default Axios