import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { SignupApi } from '../../Api/Register';
import RegisterSuccessPage from './RegisterSuccessPage';

function SignUp() {
    const user = useSelector((state) => state.register)
    // console.log(user)
    const [Errors, setErrors] = useState()
    const [data, setdata] = useState('')
    const [RegisterSuccessPageStatus, setRegisterSuccessPageStatus] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    /* redirect ther user back to -home if there is user logged */
    useEffect(() => {
        if (user.currentUser) {
            navigate('/')
        }
    }, [])

    /* getting all input value with there name */
    function handleSignUp(e) {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    /* regiter users */
    function RegisterUser(e) {
        e.preventDefault()
        setErrors('')
        if (!data.username || !data.email || !data.password) {
            setErrors('All field required');
            return;
        } else {
            if (data.password === data.confirm_password) {
                SignupApi(dispatch, data)
                return
            }
            setErrors('password those not match')
        }
    }
    useEffect(() => {
        if (user.signUpErro) {
            setErrors(user.signUpErro.email)
        }
    }, [user.signUpErro])

    useEffect(() => {
        if (user.regSuccess) {
            setRegisterSuccessPageStatus(true)
        }
    }, [user.regSuccess])




    return (
        <div>
            {RegisterSuccessPageStatus ? <RegisterSuccessPage />
                :
                <div className='mt-10'>
                    <div className="bg-slate-900 flex flex-col">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-slate-800 px-6 py-8 rounded shadow-md text-black w-full md:mt-10">
                                <h1 className="mb-8 text-3xl text-center text-white font-extrabold">Sign up</h1>
                                <input
                                    onChange={handleSignUp}
                                    // value={username}
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded my-2  bg-slate-700 text-white relative"
                                    name="username"
                                    placeholder="Username" required />
                                {/* <p className='mb-4 text-red-500'>{userNameErr}</p> */}
                                <input
                                    onChange={handleSignUp}
                                    // value={email}
                                    type="email"
                                    className="block border border-grey-light w-full p-3 rounded my-2 bg-slate-700 text-white relative"
                                    name="email"
                                    placeholder="Email" required />
                                {/* <p className='mb-4 text-red-500'>{emailErr}</p> */}
                                <input
                                    onChange={handleSignUp}
                                    // value={password}
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded my-2 bg-slate-700 text-white relative"
                                    name="password"
                                    placeholder="Password" required />
                                {/* <p className='mb-4 text-red-500'>{passwordErr}</p> */}
                                <input
                                    onChange={handleSignUp}
                                    // value={Confirm_password}
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 my-2 bg-slate-700 text-white relative"
                                    name="confirm_password"
                                    placeholder="Confirm Password" required />
                                {/* <p className='mb-4 text-red-500'>{passwordErr}</p> */}
                                <p className='mb-4 text-red-500'>{Errors}</p>
                                {
                                    user.signupIsFetching ?
                                        <button
                                            disabled
                                            type="submit"
                                            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-blue-400 cursor-not-allowed"
                                        >
                                            {/* <GetuserSpinner /> */} loading...
                                        </button>
                                        :
                                        <button
                                            onClick={RegisterUser}
                                            type="submit"
                                            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-blue-400"
                                        >Create Account</button>
                                }


                                <div className="text-center text-sm text-white mt-4">
                                    By signing up, you agree to the
                                    <Link to='#' className="no-underline border-b border-grey-dark text-grey-dark">
                                        Terms of Service
                                    </Link> and
                                    <Link to='#' className="no-underline border-b border-grey-dark text-grey-dark">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>


                            <div className="text-grey-dark mt-6 text-white">
                                Already have an account?
                                <Link to='/Login'>
                                    <span className="no-underline border-b border-blue text-blue-600">
                                        Log in
                                    </span>.
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default SignUp