import React, { useContext, useEffect, useState } from "react";


const Order = React.createContext()

const OrdersInfo = ({ children }) => {
    const [stripeSuccess, setstripeSuccess] = useState(false)
    const [Orders, setOrders,] = useState()

    return <Order.Provider value={{ Orders, setOrders, setstripeSuccess, stripeSuccess }}>{children}</Order.Provider>
}

export default OrdersInfo;

export const GlobalOrdersInfo = () => {
    return useContext(Order)
}