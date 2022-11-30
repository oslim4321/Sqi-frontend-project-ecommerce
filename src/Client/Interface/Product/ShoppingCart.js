import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { removeFromCart } from '../../REDUX/ReduxMain.js/AddToCart';
// import EmptyCart from './EmptyCart';
import StripeCheckout from 'react-stripe-checkout';
import { UserRequest } from '../../RequestMethod';
import { GlobalOrdersInfo } from '../../Context/UserOrderInfo';
import Loading from '../../NotFound/Loading';
// import { User } from '../../../User/User'


function ShoppingCart() {
    /* this order import is for saving the use orders inside context api so it can be access ani where */
    const { setOrders, setstripeSuccess } = GlobalOrdersInfo()
    const [loadingState, setloadingState] = useState(false)
    const { currentUser } = useSelector((state) => state.register);
    // const { userData } = User()
    const navigate = useNavigate()
    // const { pathname } = useLocation()
    const product = useSelector((state) => state.cart);
    const [finalTotalPrice, setfinalTotalPrice] = useState()
    // const [activateButtIfUserTrue, setactivateButtIfUserTrue] = useState(false)
    const [stripeToken, setstripeToken] = useState(null)
    const ApiKEy = 'pk_test_51LomMgH3FDIF4YxGBzCvGdK8ztMmTZDAscmiLZJnsDLhZyOy144w8G4a8WuDLNqRWgsAks8Xb41cWqSCU9yNdD8x00UgI6Ay5e'
    // (product.products)

    useEffect(() => {
        setfinalTotalPrice(product.products.reduce((acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0))
    }, [product])
    // (finalTotalPrice)

    const dispatch = useDispatch()
    // useEffect(() => {
    //     if (userData) {
    //         setactivateButtIfUserTrue(true)
    //     }
    // }, [pathname])

    const onToken = (token) => {
        setstripeToken(token)
    }
    /* redirct the use if success */
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await UserRequest.post('/product/stripe', {
                    tokinId: stripeToken.id,
                    amount: finalTotalPrice * 100
                });
                if (res.data) {
                    setOrders(res.data)
                    setstripeSuccess(true)
                    navigate('/TransSuccess',)
                    setloadingState(false)
                } else {
                    navigate('/NotSucces')
                }
            } catch (error) {
                navigate('/NotSucces')
                setloadingState(false)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])





    return (
        <div>
            <main>
                <div>
                    {loadingState ? <Loading />
                        :
                        <div className="bg-slate-900">
                            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl">
                                <div className="max-w-4xl mx-auto">
                                    <h1 className="text-3xl font-extrabold tracking-tight text-white">Shopping Cart</h1>

                                    <form className="mt-12">
                                        <section aria-labelledby="cart-heading">
                                            <h2 id="cart-heading" className="sr-only">
                                                Items in your shopping cart
                                            </h2>

                                            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                                {product ?
                                                    product.products.map((prod) => (
                                                        <li key={uuidv4()} className="flex py-6 sm:py-10">
                                                            <div className="flex-shrink-0">
                                                                <img src={prod.image}
                                                                    alt="24 oz Insulated Steel Straw Tumbler" className="rounded-lg object-center object-cover w-24 h-28 sm:w-32 sm:h-36" />
                                                            </div>

                                                            <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                                                <div>
                                                                    <div className="flex justify-between sm:grid sm:grid-cols-2">
                                                                        <div className="pr-6">
                                                                            <h3 className="text-sm">
                                                                                <Link to='/' className="font-medium text-slate-300 hover:text-gray-100 line-clamp-2">
                                                                                    24 oz Insulated Steel Straw Tumbler
                                                                                </Link>
                                                                            </h3>
                                                                            <p className="mt-1 text-sm text-slate-100">
                                                                                {prod.title}
                                                                            </p>
                                                                        </div>

                                                                        <p className="flex justify-end text-sm font-medium text-slate-100 text-right">
                                                                            <svg className="hidden animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                            </svg>
                                                                            <span className='text-white'>
                                                                                $ {Math.floor(prod.price * prod.quantity)}
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                                                                        <label className="block font-medium text-sm text-gray-700 sr-only" for="item-0-quantity">
                                                                            Quantity
                                                                        </label>
                                                                        <input className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md block w-20 text-center sm:text-sm show-spinners disabled:bg-gray-100 bg-slate-500 text-white" type="number" id="item-0-quantity" min="1"
                                                                            defaultValue={prod.quantity}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="mt-4 flex items-center justify-between">
                                                                    {/* price */}
                                                                    <p className="flex items-center text-sm text-white space-x-2">
                                                                        $ {Math.floor(prod.price)}
                                                                    </p>
                                                                    {/* color */}
                                                                    {prod.color && <p className={`flex items-center text-sm text-white space-x-2`}>
                                                                        <label className={`-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer bg-${prod.color} focus:outline ring-2 ring-blue-500}`} style={{ background: prod.color }}>
                                                                            <input type="radio" value="660" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                                            <p id="color-choice-0-label" className="sr-only">
                                                                                Chambray
                                                                            </p>
                                                                            <span aria-hidden="true" className="w-8 h-8 rounded-full border border-black border-opacity-10 bg-center bg-cover"
                                                                            ></span>
                                                                        </label>
                                                                    </p>}
                                                                    <button onClick={() => dispatch(removeFromCart(prod.ID))} type="button" className="flex text-sm font-medium text-blue-600 hover:text-blue-500">
                                                                        <span>Remove</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                    :
                                                    // <EmptyCart />
                                                    <div className='text-white text-[30px]'>No no cart
                                                    </div>

                                                }
                                            </ul>
                                        </section>

                                        {/* <!-- Order summary --> */}
                                        <section aria-labelledby="summary-heading" className="mt-10 sm:ml-32 sm:pl-6">
                                            <h2 id="summary-heading" className="sr-only">
                                                Order summary
                                            </h2>

                                            <div>
                                                <dl className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <dt className="text-base font-medium text-white">Subtotal</dt>
                                                        <dd className="ml-4 text-base font-medium text-gray-900">
                                                            <svg className="hidden animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            <span className='text-white'>
                                                                ${Math.floor(finalTotalPrice)}
                                                            </span>
                                                        </dd>
                                                    </div>
                                                </dl>
                                                <p className="mt-1 text-sm text-slate-100">Shipping and taxes will be calculated at checkout.</p>
                                            </div>

                                            {
                                                currentUser ?

                                                    <StripeCheckout
                                                        name='Sqi Ecommerce project'
                                                        image='/Images/yara-kawe.png'
                                                        billingAddress
                                                        shippingAddress
                                                        description={`Your total is $${finalTotalPrice}`}
                                                        amount={finalTotalPrice * 100}
                                                        token={onToken}
                                                        stripeKey={ApiKEy}
                                                    >
                                                        <div className="mt-10">
                                                            <div onClick={() => setloadingState(true)} className="inline-flex items-center justify-center py-2 bg-blue-600 border border-transparent rounded-md font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-600 transition w-full px-4" href="https://demo.cartify.dev/checkout">
                                                                Proceed to Checkout
                                                            </div>
                                                        </div>
                                                    </StripeCheckout>
                                                    :

                                                    <div className="mt-10">
                                                        <div className="inline-flex items-center justify-center py-2 bg-blue-600 border border-transparent rounded-md font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-600 transition w-full px-4" href="https://demo.cartify.dev/checkout">
                                                            Pls login before checkout
                                                        </div>
                                                    </div>
                                            }

                                            <div className="mt-6 text-sm text-center">
                                                <p>
                                                    or
                                                    <Link to='/AllCatFetch/All' className="text-blue-600 font-medium hover:text-blue-500">
                                                        Continue Shopping<span aria-hidden="true"> →</span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </section>
                                    </form>
                                </div>
                            </div >
                        </div >
                    }
                </div >
            </main >
        </div >
    )
}

export default ShoppingCart