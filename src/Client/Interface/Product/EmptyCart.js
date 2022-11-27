import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div>
            <div className="max-w-4xl mx-auto z-40">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">
                        Your cart is currently empty
                    </h1>
                    <p className="mt-2 text-slate-200">
                        Before proceed to checkout you must add some products to your shopping cart.
                    </p>
                    <Link to='/AllCatFetch/All' className="inline-flex items-center justify-center  bg-blue-600 border border-transparent rounded-md font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-600 transition mt-5 px-8 py-3">
                        Start shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart