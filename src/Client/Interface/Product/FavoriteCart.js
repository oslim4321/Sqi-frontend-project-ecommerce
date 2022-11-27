import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Loading from '../../NotFound/Loading';
import EmptyCart from './EmptyCart';

function FavoriteCart() {
    const { favorite } = useSelector((state) => state.cart);
    return (
        <div>
            <div className="bg-slate-900 h-screen">
                <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10 text-white">
                        <div className="w-full bg-slate-800 px-10 py-10">
                            <div className="flex justify-between border-b pb-8 border-slate-700">
                                <h1 className="font-semibold text-2xl text-white">Faovorite Cart  <i className="bi bi-balloon-heart-fill text-red-600 text-2xl"></i></h1>
                                <h2 className="font-semibold text-2xl text-white">{favorite.length} Items</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-slate-200 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold  text-slate-200 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                <h3 className="font-semibold  text-slate-200 text-xs uppercase w-1/5 text-center">Price</h3>
                                <h3 className="font-semibold  text-slate-200 text-xs uppercase w-1/5 text-center">Total</h3>
                                <h3 className="font-semibold  text-slate-200 text-xs uppercase w-1/5 text-center">Add To Cart</h3>
                            </div>
                            {favorite ?
                                favorite.map((fav) => (
                                    <div className="flex items-center hover:bg-slate-900 bg-slate-700 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            {/* <!-- product --> */}
                                            <div className="w-20">
                                                <img className="h-24" src={fav.image} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">{fav.title}</span>
                                                <span className="text-red-500 text-xs">Apple</span>
                                                <a className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            {/* minus button */}
                                            <svg className="fill-current text-slate-200 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input className="mx-2 border text-center w-8 bg-slate-900" type="text" />
                                            {/* plus button */}
                                            <svg className="fill-current text-slate-200 w-3" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">${fav.price}</span>
                                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                        <Link to={`/BuyProduct/${fav._id}`} className="text-center w-1/5 font-semibold text-sm">Buy</Link>
                                    </div>
                                ))
                                :
                                <Loading />
                            }
                            {favorite.length < 1 && <EmptyCart />}

                            <Link to='/AllCatFetch/All' className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FavoriteCart