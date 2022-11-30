import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { User } from '../../../User/User'
import { GlobalDisplayAlert } from '../../Context/Alert'
import { navitem } from './NavbarItems'
import PopingCart from './PopingCart'
import Prof from './Prof'


function Navbar() {
    const { showAlert } = GlobalDisplayAlert()
    const { userData } = User()
    const { currentUser } = useSelector((state) => state.register);
    const [navState, setnavState] = useState(false)
    const [showNav, setshowNav] = useState(true)
    const [backToTop, setbackToTop] = useState(false)
    const [noItemInCart, setnoItemInCart] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setnavState(false)
            setnoItemInCart(false)
            setsubscribe(false)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollHeight = window.pageYOffset;
            if (scrollHeight > 500) {
                setshowNav(false)
                setbackToTop(true)
            } else {
                setshowNav(true)
                setbackToTop(false)
            }
        })
    }, [])

    const backToTopButt = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    /* get product inside redux cart */
    const { products } = useSelector((state) => state.cart);
    // console.log(products);
    // showAlert(true, "green", `Item Added To Cart Successfully`)
    // const navigate = useNavigate()
    function viewCart() {
        setnoItemInCart(!noItemInCart)
        setnavState(false)

    }
    const [subscribe, setsubscribe] = useState(false)

    useEffect(() => {
        showAlert(true, `${navigator.onLine ? 'yellow' : 'red'}`,
            ` ${navigator.onLine ? "You are Online 😜" : "You Are Offline 🤔"}`);

    }, [navigator.onLine])
    // showAlert(true, "blue", ` ${navigator.onLine ? "You are Online" : "You Are Offline"}`);

    // console.log(`Your network status is ${navigator.onLine ? "Online" : "Offline"}`)

    return (
        <div>
            <div className="bg-gray-300 font-sans leading-normal tracking-normal">

                {showNav && <nav className="flex items-center justify-around flex-wrap bg-black p-7 mb-10 fixed w-full z-10 top-0 ">
                    <div className="flex items-center  text-white mr-6">
                        <div className="text-white no-underline hover:text-white hover:no-underline -mt-5">
                            <Link to='/'><span className="md:text-2xl pl-2"><i className="em em-grinning"></i> <img className='md:w-20 md:-mt-3 w-12  rounded-full' src="/Images/border_blue-removebg-preview.png" alt="logo" /></span></Link>
                        </div>
                    </div>


                    {/* cart SVG when click it will pop out the cart items */}
                    <button onClick={viewCart} className="group -m-2 p-2 flex items-center">
                        <svg className="flex-shrink-0 h-6 w-5 md:w-16 text-white group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        {/* toggle the contebt inside the cart */}
                        <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-800">
                            {products.length < 1 ? (!noItemInCart ? '0' : <i className="bi bi-x-lg text-red-400"></i>)
                                :
                                (!noItemInCart ? products.length : (<i className="bi bi-x-lg text-white"></i>))}</span>

                        <span className="sr-only">items in cart, view bag</span>
                    </button>

                    {/* Cart items only show when cartt svh is click */}
                    {noItemInCart && <div className='absolute left-5 mt-5'> <PopingCart /></div>}

                    {/* sending setsubscribe to prof so i can toggle the profile. I also send setnavstate so i can turn hamburger to 'hidden' when profile is clicked */}
                    {/* i also want to show the prof button only when the user is online */}
                    {currentUser && <Prof subscribe={subscribe} setsubscribe={setsubscribe} setnavState={setnavState} />}

                    <div className="block lg:hidden">
                        {/* <button  id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"> */}
                        <div onClick={() => { setnavState(!navState); setnoItemInCart(false); setsubscribe(false) }}>
                            <button className="relative group">
                                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${navState ? 'group-focus:translate-x-10' : ''}`}></div>
                                        <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300  ${navState ? 'group-focus:translate-x-10 delay-75' : ''}`}></div>
                                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${navState ? 'group-focus:translate-x-10 delay-150' : ''}`}></div>

                                        <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 group-focus:w-12 ${navState ? 'group-focus:translate-x-0' : ''} `}>
                                            <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${navState ? 'group-focus:rotate-45' : ''}`}></div>
                                            <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300  ${navState ? 'group-focus:-rotate-45' : ''} `}></div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        {/* </button> */}
                    </div>


                    {/* conditionally render element on navbar if user exis or not */}
                    {
                        currentUser ?
                            (
                                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block' ${navState ? 'block' : 'hidden'}`} id="nav-content">
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center listing">
                                        {
                                            navitem.map((nav) => (
                                                <li key={nav.id} className="mr-3">
                                                    <Link to={nav.url} onClick={() => setnavState(false)} className="inline-block py-2 px-4 text-white transition-all  md:hover:-translate-y-1 motion-reduce:transition-none
                                                 motion-reduce:hover:transform-none text-lg">{nav.text}</Link>
                                                </li>
                                            ))
                                        }
                                        <li className="mr-3">
                                            <Link to='/' className="inline-block py-2 px-4 text-white no-underline transition-all  md:hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                                Hi {currentUser ? userData?.username : 'Guest'}
                                            </Link>

                                        </li>
                                        <i className="bi bi-search-heart"></i>

                                    </ul>
                                </div>
                            )
                            :
                            (
                                <div onClick={() => setnavState(false)} className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block' ${navState ? 'block' : 'hidden'}`} id="nav-content">
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                        <li className="mr-3">
                                            <Link className="inline-block py-2 px-4 text-white" to='/Login'>
                                                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-5">
                                                    Login
                                                </button>
                                            </Link>

                                        </li>
                                        <li className="mr-3">
                                            <Link className="inline-block py-2 px-4 text-white" to='/SignUp'>
                                                <button className="bg-transparent hover:bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                    SignUp
                                                </button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                    }
                </nav>}

                {/* <!--Container--> */}
                <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18">

                </div>

                {
                    backToTop &&
                    <div onClick={backToTopButt} className="flex items-start justify-start fixed bottom-0 left-0 mb-4 m-4 z-10 animate-bounce ">
                        <div>
                            <button className='hover:bg-blue-400 rounded-full w-16 h-16 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-1 md:w-20 md:h-20'><i className="bi bi-arrow-up text-2xl text-white  hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-1"></i></button>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar