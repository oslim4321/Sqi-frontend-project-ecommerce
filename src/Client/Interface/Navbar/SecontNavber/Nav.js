import React from 'react'

function Nav() {
    return (
        <div className='bg-blue-600 mt-10 sticky'>
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8 mt-10">
                <p className="flex-1 text-sm text-center font-medium text-white sm:text-left lg:flex-none">
                    Welcome to our store
                </p>
                <div className="hidden sm:flex items-center space-x-6">
                    <a href="https://demo.cartify.dev/login" className="text-sm font-medium text-white hover:text-gray-100">
                        Sign in
                    </a>
                    <span className="h-6 w-px bg-blue-500" aria-hidden="true"></span>
                    <a href="https://demo.cartify.dev/register" className="text-sm font-medium text-white hover:text-gray-100">
                        Create an account
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Nav