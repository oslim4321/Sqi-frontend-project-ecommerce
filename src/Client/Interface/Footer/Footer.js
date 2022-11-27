import React from 'react'
import { Link } from 'react-router-dom'
import { navitem } from '../Navbar/NavbarItems'

function Footer() {
    return (
        <div>


            <footer className="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-100">
                <div className="sm:flex sm:items-center sm:justify-between relative">
                    <Link to='#' className="flex items-center mb-4 sm:mb-0">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-100">Oslim</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                        {
                            navitem.map((nav) => (
                                <li key={nav.id}>
                                    <Link to={nav.url} className="mr-4 text-sm text-slate-200 hover:underline md:mr-6 dark:text-slate-300">{nav.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to='#' className="hover:underline">Oslim</Link>. All Rights Reserved.
                </span>
            </footer>
        </div>

    )
}

export default Footer