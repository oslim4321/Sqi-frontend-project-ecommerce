import React, { useEffect, useState } from 'react'
import { PublicRequest } from '../../../RequestMethod'
import { GlobalDisplayAlert } from '../../../Context/Alert';


function SkipPages({ category, setproduct, setLoadingState }) {
    const { showAlert } = GlobalDisplayAlert()
    const [pageInd, setpageInd] = useState()
    let save
    const getPageIndex = async (page) => {
        setLoadingState(true)
        setpageInd(page)
        try {
            const result = await PublicRequest.get(`/product?${category}=${category}&page=${page}`)
            setproduct(result.data.products)
            setLoadingState(false)
            save = localStorage.setItem('pageIndex', result.data.pageNum)
            // console.log(result.data.pageNum)
        } catch (error) {
            showAlert(true, "red", `error ${error.message}`)
            setLoadingState(false)
        }
    }
    useEffect(() => {
        setpageInd(localStorage.getItem('pageIndex'))

    }, [pageInd, save])

    // console.log(pageInd, 'here')
    return (
        <div>
            <div className="mt-6">
                <div>

                    <nav role="navigation" aria-label="Pagination Navigation" className="flex items-center justify-between overflow-x-auto mx-10 no-scrollbar">
                        {/* <div className="flex justify-between flex-1 sm:hidden">
                            <span>
                                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white border border-gray-300 cursor-default leading-5 rounded-md select-none">
                                    « Previous
                                </span>
                            </span>

                            <span>
                                <button onClick={nextPage} dusk="nextPage.before" className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                                    Next »
                                </button>
                            </span>
                        </div> */}

                        <div className="no-scrollbar flex-1 flex items-center justify-center gap-x-4 overflow-scrool no-scrollbar">
                            <div>
                                <span className="relative z-0 inline-flex rounded-md">
                                    {/* <span>

                                        <span role="button" aria-disabled="true" aria-label="&amp;laquo; Previous">
                                            <span className="relative inline-flex items-center px-2.5 py-2 text-sm font-medium text-white cursor-default border border-transparent leading-5" aria-hidden="true">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </span> */}
                                    {/* <span className='mx-2'>
                                        <span aria-current="page ">
                                            <span className="relative z-10 inline-flex items-center px-4 py-2 mx-px text-sm text-white font-medium bg-blue-500 rounded cursor-default leading-5 select-none">{i + 1}</span>
                                        </span>
                                    </span> */}

                                    {
                                        [...Array(5)].map((z, i) => (
                                            <div key={i + 1}>
                                                {/* bg-blue-500  cursor-default */}
                                                <span onClick={() => getPageIndex(i + 1)}>
                                                    <button className={`relative inline-flex items-center px-4 py-2 mx-2 text-sm font-medium
                                                     rounded border border-transparent leading-5  focus:z-10
                                                     focus:outline-none focus:border-blue-300 focus:shadow-outline-blue 
                                                     transition ease-in-out duration-150 
                                                     select-none text-white
                                                     ${i + 1 == pageInd ? 'bg-blue-500 cursor-default' : 'active:bg-gray-100  active:text-gray-700 hover:bg-black '}
                                                     `} aria-label="Go to page 2">
                                                        {i + 1}
                                                    </button>
                                                </span>

                                            </div>
                                        ))


                                    }

                                    {/* <span>
                                        <button className="relative inline-flex items-center px-4 py-2 mx-px text-sm font-medium text-gray-700 rounded border border-transparent leading-5 hover:bg-gray-200 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" aria-label="Go to page 2">
                                            2
                                        </button>
                                    </span> */}
                                    {/* <span>

                                        <button rel="next" className="relative inline-flex items-center px-2.5 py-2 text-sm font-medium text-white rounded border border-transparent leading-5 hover:bg-gray-200 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-white transition ease-in-out duration-150" aria-label="Next &amp;raquo;">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </span> */}
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>

            </div >
        </div>
    )
}

export default SkipPages