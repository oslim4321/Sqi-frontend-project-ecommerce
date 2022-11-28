import React, { useEffect, useState } from 'react'
import { UserRequest } from '../../RequestMethod'
import { User } from '../../../User/User'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


function UserOrder() {
    const { userData } = User()
    const [yourOrder, setyourOrder] = useState()
    // (userData._id, 'from user order')

    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const res = await UserRequest.get(`/order/${userData._id}`)
                setyourOrder(res.data)
                    (res.data)
            } catch (error) {
            }
        }
        userData && getUserOrder()
    }, [userData])
    // (yourOrder, 'order')
    /*  {yourOrder?.map((ele) => (ele.product.map((ele) => (ele.productId))))} */
    return (
        <div>
            {
                yourOrder?.map((order) => (
                    <Link to={`/ViewOrders/${order._id}`}>
                        <div key={order._id} className="w-full border-t border-slate-700 text-slate-300 py-4 pl-6 pr-3 hover:bg-slate-700 transition duration-150  mb-10 inline-block">
                            <div className="flex">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                <p className='w-64 overflow-x-scroll md:overflow-hidden md:w-full'>{order._id} </p>
                            </div>
                            <span className="text-slate-500 text-xs hover:text-white w-screen text-left overflow-x-scroll">
                                {/* {yourOrder?.map((ele) => (ele.status), '</br>')} */}
                                {format(order.createdAt)}
                            </span>
                            <br></br>
                            {/* <span className=" text-xs text-white w-screen text-left mx-5">
                            ${yourOrder?.map((ele) => (ele.amount))}
                        </span> */}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default UserOrder