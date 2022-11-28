import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { User } from '../../../User/User';
import { UserRequest } from '../../RequestMethod';
import { format } from 'timeago.js'


function TransSucces() {
    const { userData } = User()
    const GetDate = new Date
    // const Order = useSelector((state) => state.cart);
    const [singleOrder, setsingleOrder] = useState()
    const [prod, setprod] = useState()

    // let date = GetDate.toLocaleDateString()
    /* going to use it later */
    // {yourOrder?.map((ele) => (ele.product.map((ele) => (ele.productId))))}
    const { pathname } = useLocation()
    const { id } = useParams()
    useEffect(() => {
        async function getUserSingleOrder() {
            try {
                const res = await UserRequest.get(`/order/singleOrderOne/${id}`)
                setsingleOrder(res.data)
            } catch (error) {
            }
        }
        getUserSingleOrder()
    }, [])

    /* fetch the product user order */
    useEffect(() => {
        singleOrder && singleOrder.map((elem) => elem.product.map(({ productId }) => {
            // return () => {
            async function getOrderProd() {
                const res = await UserRequest.get(`/product/${productId}`)
                setprod(res.data)
            }
            getOrderProd()
            // };

        }))


    }, [singleOrder])

    return (
        <div>
            <main>
                <div>

                    <div className="bg-gray-900">
                        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                            <div className="lg:col-start-2">
                                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Thanks for shopping with us!</h1>
                                <p className="mt-2 text-base text-slate-400">We appreciate your order, we’re currently processing it. So hang tight, and we’ll send you confirmation very soon!</p>
                                <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6">
                                    <dl className="text-sm font-medium">
                                        <dt className="text-slate-300">Order number</dt>
                                        {userData ?
                                            <dd className="mt-2 text-blue-600">{userData.username}</dd>
                                            :
                                            <dd className="mt-2 text-blue-600">#1784</dd>
                                        }

                                    </dl>
                                    <dl className="text-sm font-medium">
                                        <dt className="text-slate-300">Payment status</dt>
                                        <dd className="mt-2 text-blue-600">
                                            <div className="flex items-center text-sm text-gray-500 space-x-1">
                                                <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: '#60a5fa' }}></span>
                                                <span>Paid</span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="text-sm font-medium">
                                        <dt className="text-slate-300">Shipping status</dt>
                                        <dd className="mt-2 text-blue-600">
                                            <div className="flex items-center text-sm text-gray-500 space-x-1">
                                                <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: '#fbbf24' }}></span>
                                                <span>Unshipped</span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="text-sm font-medium">
                                        <dt className="text-slate-300">Date created</dt>
                                        <dd className="mt-2 text-blue-600">
                                            <div className="flex items-center text-sm text-gray-500 space-x-1">

                                                {format(singleOrder?.createdAt)}

                                            </div>
                                        </dd>
                                    </dl>
                                </div>


                                <ul className="mt-6 text-sm font-medium text-gray-500 border-t border-slate-600 divide-y divide-gray-200">
                                    {
                                        <li className="flex py-6 space-x-6">
                                            <img src={prod?.img} alt="Have A Nice Day Tee - All-Gender" className="flex-none w-24 h-28 bg-gray-100 rounded-md object-center object-cover sm:w-32 sm:h-36" />
                                            <div className="flex-auto flex flex-col space-y-1">
                                                <h3 className="text-gray-700 hover:text-gray-800">
                                                    <div className='text-white'>{prod?.title}</div>
                                                </h3>
                                                <div className="inline-flex space-x-2 divide-x divide-gray-200">
                                                    <p className=" text-white">{prod?.category[0]}</p>
                                                    <p className="pl-2">XS</p>
                                                </div>
                                                <div className="mt-6 flex-1 flex items-end">
                                                    <dl className="hidden sm:flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                                                        <div className="flex">
                                                            <dt className="font-medium text-white">Quantity</dt>
                                                            <dd className="ml-2 text-slate-400">
                                                                1
                                                            </dd>
                                                        </div>
                                                        <div className="pl-4 flex sm:pl-6">
                                                            <dt className="font-medium text-white">Price</dt>
                                                            <dd className="ml-2 text-slate-400">
                                                                $36.00
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                    <dl className="sm:hidden flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                                                        <div className="flex">
                                                            <dt className="font-medium text-gray-900 sr-only">Price</dt>
                                                            <dd className="text-gray-700">
                                                                $36.00
                                                                x1
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>

                                            <p className="hidden sm:block flex-none font-medium text-gray-900">
                                                $36.00
                                            </p>
                                        </li>

                                    }
                                </ul>

                                <dl className="text-sm font-medium text-slate-400 space-y-6 border-t border-slate-600 pt-6">
                                    <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd className="text-slate-200">
                                            $36.00
                                        </dd>
                                    </div>

                                    <div className="flex justify-between">
                                        <dt>Taxes</dt>
                                        <dd className="text-slate-200">
                                            $0.00
                                        </dd>
                                    </div>

                                    <div className="flex justify-between">
                                        <dt>Shipping</dt>
                                        <dd className="text-slate-200">
                                            $45.00
                                        </dd>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-600 text-gray-900 pt-6">
                                        <dt className="text-base">Total</dt>
                                        <dd className="text-base">
                                            $81.00
                                        </dd>
                                    </div>
                                </dl>

                                <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                                    <div>
                                        <dt className="font-medium text-slate-100">Shipping Address</dt>
                                        <dd className="mt-2">
                                            <address className="not-italic">
                                                {singleOrder &&
                                                    singleOrder.map((order) => {
                                                        const { line1, country, city, postal_code } = order.address.address
                                                        return (
                                                            <div key={order}>
                                                                <div className='text-slate-400'><span className='text-slate-200'>line1: </span> {line1}</div>
                                                                <div className='text-slate-400'><span className='text-slate-200'>country:   </span> {country}</div>
                                                                <div className='text-slate-400'><span className='text-slate-200'>city:  </span> {city}</div>
                                                                <div className='text-slate-400'><span className='text-slate-200'>postal_code:   </span> {postal_code}</div>
                                                            </div>
                                                        )
                                                    })
                                                }



                                            </address>
                                        </dd>
                                    </div>
                                </dl>

                                <div className="mt-16 border-t border-slate-600 py-6 text-right">
                                    <Link to='/AllCatFetch/All' className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                        Continue Shopping<span > →</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default TransSucces