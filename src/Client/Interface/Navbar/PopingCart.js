import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import EmptyCart from '../Product/EmptyCart';
import { v4 as uuidv4 } from 'uuid';


function PopingCart() {
    const { products } = useSelector((state) => state.cart);
    // products.length ? ('aliamsulai') : ('bafffff')
    // if (products.length > 0) {
    //     ('aliamsulai')
    // } else {
    //     ('bafffff')
    // }
    return (
        <div>
            <div className="absolute z-50 mt-2 w-80 rounded-md shadow-lg">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-slate-700">
                    <div className="px-4 mt-px pb-6">
                        <h2 className="sr-only">Shopping Cart</h2>
                        <ul role="list" className="divide-y divide-gray-200 overflow-y-auto overflow-scrol h-[470px] no-scrollbar">
                            {/* <div className='overflow-y-scroll overflow-x-auto overflow-scrol'> */}
                            {products &&
                                products.map((prod) => (
                                    <li key={uuidv4()} className="py-6 flex">
                                        <img src={prod.image
                                        } alt="24 oz Insulated Steel Straw Tumbler - Lakeside camo" className="flex-none w-16 rounded-md border border-gray-200" />
                                        <div className="ml-4 flex flex-auto flex-col justify-between"><h3 className="font-medium text-gray-900">
                                            <Link to={prod._id} className="line-clamp-2 text-white">
                                                {prod.title}
                                            </Link>
                                        </h3>
                                            <p className="text-slate-200">{prod.size}</p>
                                        </div>
                                    </li>
                                ))
                            }
                            {
                                products.length > 0 ? '' : <div className="flex items-center justify-center">
                                    <EmptyCart />
                                </div>
                            }

                            {/* </div> */}
                        </ul>
                        {/* {
                            !products.products &&
                            

                        } */}
                        {products.length > 0 && <Link to='/ShoppingCart' className="items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200
                         active:bg-blue-600 transition block w-full text-sm text-center">
                            Checkout
                        </Link>}
                        {products.length > 0 && <p className="mt-6 text-center">
                            <Link to='/ShoppingCart' className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                View Shopping Cart
                            </Link>
                        </p>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopingCart