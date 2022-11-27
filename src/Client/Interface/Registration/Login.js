import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../../User/User';
import { LoginApi } from '../../Api/Register'

function Login() {
    const user = useSelector((state) => state.register)
    const [data, setdata] = useState('')
    const dispatch = useDispatch()
    const [Errors, setErrors] = useState('')
    const navigate = useNavigate()
    /* redirect ther user back to -home if there is user logged */
    useEffect(() => {
        if (user.currentUser) {
            navigate('/')
        }
    }, [])
    /* get all the input value onchange event */
    function handleLogin(e) {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    /* login the use in if valid */
    function LoginUser(e) {
        e.preventDefault()
        LoginApi(dispatch, data)
    }
    useEffect(() => {
        setErrors('')
        if (user.error) {
            setErrors('Err please check your details ')
        }
    }, [user.error])
    /* if login is success redirect the user then refresh the page */
    useEffect(() => {
        setErrors('')
        if (user.currentUser) {
            navigate('/')
        }
    }, [user.currentUser])



    return (
        <div>
            <div>
                <div>
                    <div className="bg-slate-900 flex flex-col overflow-hidden h-full">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-slate-800 px-6 py-8 rounded shadow-md text-black w-full ">
                                <h1 className="mb-8 text-3xl text-center text-white text-extrabold relative">log in</h1>

                                <input
                                    onChange={handleLogin}
                                    // value={Email}
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 my-2  bg-slate-700 text-white relative"
                                    name="email"
                                    placeholder="Email" />

                                <input
                                    onChange={handleLogin}
                                    // value={password}
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 my-2  bg-slate-700 text-white relative"
                                    name="password"
                                    placeholder="Password" />
                                <p className='mb-4 text-red-500'>{Errors}</p>
                                {
                                    user.isFetching ?
                                        <button
                                            disabled
                                            type="submit"
                                            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-blue-400 cursor-not-allowed relative"
                                        >
                                            loading...
                                            {/* <GetuserSpinner /> */}
                                        </button>
                                        :
                                        <button
                                            onClick={LoginUser}
                                            type="submit"
                                            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-blue-400 relative"
                                        >Login</button>



                                }




                                <div className="text-center text-sm text-grey-dark mt-4 text-white">
                                    By signing up, you agree to the
                                    <Link to='/' className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                        Terms of Service
                                    </Link> and
                                    <Link to='#' className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>
                            {/* <p className='text-red-600'>{errMess}</p> */}

                            <div className="text-grey-dark mt-6 text-white">
                                Already have an account?
                                <Link to='/Signup'>
                                    <Link to='/Signup' className="no-underline border-b border-blue text-blue-600">
                                        Sign Up
                                    </Link>.
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login