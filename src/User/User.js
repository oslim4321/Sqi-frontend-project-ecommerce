import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const User = () => {
    const { currentUser } = useSelector((state) => state.register);
    const { pathname } = useLocation()
    const [userData, setuserData] = useState();
    /* i am getting the user from local storage retuning/exporting it out Others component */
    useEffect(() => {
        return () => {
            setuserData(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser))
        };
    }, [pathname, currentUser])

    return ({ userData, setuserData })
}
