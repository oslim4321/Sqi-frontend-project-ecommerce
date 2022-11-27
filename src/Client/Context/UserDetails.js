// import React, { useContext, useEffect, useState } from "react";
// import { useSelector } from "react-redux";


// const User = React.createContext()

// const UserInfo = ({ children }) => {
//     const { currentUser } = useSelector((state) => state.register);

//     // (JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser), 'fro m const')
//     // JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser)

//     const [userData, setuserData] = useState()
//     useEffect(() => {
//         setuserData(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser))
//     }, [currentUser])
//     // (userData, 'from persps')
//     return <User.Provider value={{ userData }}>{children}</User.Provider>
// }

// export default UserInfo;

// export const GlobalUserInfo = () => {
//     return useContext(User)
// }