import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { User } from '../../../../User/User';
import { GlobalOrdersInfo } from '../../../Context/UserOrderInfo'
import Loading from '../../../NotFound/Loading';
import { UserRequest } from '../../../RequestMethod'

function TransSuccess() {
  const { products } = useSelector((state) => state.cart);
  const { Orders, stripeSuccess } = GlobalOrdersInfo()
  const [OrderID, setOrderID] = useState()
  const [OrderQuantity, setOrderQuantity] = useState()
  const [Error, setError] = useState()
  const { userData } = User()
  const [orderSend, setorderSend] = useState()
  const { pathname } = useLocation()
  /* get all orders productID from products */
  useEffect(() => {
    products.map((order) => {
      setOrderID(order._id);
      setOrderQuantity(order.quantity)
    })
  }, [])




  const [trigge, settrigge] = useState(false)
  // (userData._id)
  /* send  alll the orders details include the userID to the backend once the order is done*/

  useEffect(() => {
    const sendUserOrder = async () => {
      try {
        const res = await UserRequest.post('/order', {
          userId: userData._id,
          product: [{
            productId: OrderID,
            quantity: OrderQuantity
          }
          ],
          amount: Orders.amount,
          address: Orders.billing_details
        })
        setorderSend(res.data)
      } catch (error) {
        setError(error.message)
        setTimeout(() => {
          // navigate('/NotSucces')
        }, 400);
      }
    }
    sendUserOrder()
  }, [pathname, trigge])


  useEffect(() => {
    setTimeout(() => {
      settrigge(true)
    }, 2000);
  }, [])


  return (

    <div>
      {
        orderSend
          ?
          <div className="bg-gray-900 h-screen flex items-center justify-center">
            <div className="bg-slate-600 p-6  md:mx-auto">
              <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                <path fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
              </svg>
              <div className="text-center">
                <h3 className="md:text-2xl text-base text-white font-semibold text-center">Payment Done!</h3>
                {/* <p className="text-slate-200 my-2">Thank you for completing your secure online payment.</p> */}
                <p className="text-slate-200 my-2">Thank you for payment completing your orders will get to you in short while  .</p>
                <p className='text-white'> Have a great day!  </p>
                <div className="py-10 text-center">
                  <Link to='/' className="px-12 bg-blue-400 hover:bg-blue-300 text-white font-semibold py-3 uppercase">
                    go back
                  </Link>
                  {/* <Link to='/ViewOrders' className="px-5 mx-2 bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 uppercase">
                  See Orders
                </Link> */}
                </div>
              </div>
            </div>
          </div>
          :
          <Loading />

      }
      {/* <div className="text-red-500 text-2xl">{Error}</div> */}
    </div>
  )
}

export default TransSuccess