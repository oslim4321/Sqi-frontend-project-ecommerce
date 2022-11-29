import axios from "axios";

let TOKEN

const localDB = localStorage.getItem('persist:root')
let user;

if (localDB) {
    user = (JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser))
}
if (user) {
    TOKEN = user.token
}

// const Base_Url = 'http://localhost:3400/api/v1/Ecommerce/'
const Base_Url = 'https://oslim4321-sqi-ecommerce-backend-production.up.railway.app/api/v1/Ecommerce/'

// const Base_Url = 'https://react-node-ecommerce-oslim.herokuapp.com/api/v1/Ecommerce/'

export const PublicRequest = axios.create({
    baseURL: Base_Url
})

export const UserRequest = axios.create({
    baseURL: Base_Url,
    headers: {
        token: `Bearer ${TOKEN}`,
    }
})