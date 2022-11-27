import React, { useState } from 'react'
import { GlobalDisplayAlert } from '../../../Context/Alert'
import { PublicRequest } from '../../../RequestMethod'

/* search?query= */
function SearchPage({ setproduct, setLoadingState }) {
    const { showAlert } = GlobalDisplayAlert()
    const [search, setsearch] = useState()
    async function searchItem(e) {
        e.preventDefault()
        if (!search) {
            showAlert(true, "red", `Input Something`);
            return
        }
        setLoadingState(true)
        const result = await PublicRequest.get(`/product?search=${search}`)
        // (result)
        const { products } = result.data
        if (products.length < 1) {
            showAlert(true, "blue", `sorry No Item check something Else`);
            setLoadingState(false)
            return
        }
        setproduct(products)
        setLoadingState(false)

    }

    return (
        <div>
            <div className="mx-auto mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-96 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
                <form className="flex flex-wrap justify-between md:flex-row">
                    <input onChange={(e) => setsearch(e.target.value)} type="search" className="flex-1 h-10 px-4 m-1 text-white placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" placeholder="Search Products" required="" />

                    <button onClick={searchItem} type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transdiv rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchPage