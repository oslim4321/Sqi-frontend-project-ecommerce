import axios from "axios";

// let TOKEN

// const localDB = localStorage.getItem('persist:root')
// let user;

// if (localDB) {
//     user = (JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser))
// }
// if (user) {
//     TOKEN = user.token
// }

// const Base_Url = 'http://localhost:3410/api/v1/Ecommerce/'
// const Base_Url = 'https://oslim4321-sqi-ecommerce-backend-production.up.railway.app/api/v1/Ecommerce/'
const Base_Url = "https://crowded-bee-purse.cyclic.app/api/v1/Ecommerce/"


export const PublicRequest = axios.create({
    baseURL: Base_Url
})

// export const UserRequest = axios.create({
//     baseURL: Base_Url,
//     headers: {
//         "Content-Type": "application/json",
//         token: `Bearer ${TOKEN}`,
//     }
// })

export const UserRequest = () => {

    let TOKEN

    const localDB = localStorage.getItem('persist:root')
    let user;

    if (localDB) {
        user = (JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser))
    }
    if (user) {
        TOKEN = user.token
    }
    return axios.create({
        baseURL: Base_Url,
        headers: {
            "Content-Type": "application/json",
            token: `Bearer ${TOKEN}`,
        },
    });
};