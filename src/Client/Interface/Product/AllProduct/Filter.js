import React, { useState } from 'react'
import { getFilters } from '../../../Api/Product'
import { GlobalDisplayAlert } from '../../../Context/Alert'
import { PublicRequest } from '../../../RequestMethod'

function FilterAcceOut({ setLoadingState, setproduct, setFilterModal }) {
    const { showAlert } = GlobalDisplayAlert()
    const [showFilter, setshowFilter] = useState(false)

    /* get  color and size filter inside an object */
    const handleFilter = async (e) => {
        setLoadingState(true)
        try {
            // console.log(e.target.name, ':', e.target.value)
            const result = await PublicRequest.get(`/product?${e.target.name}=${e.target.value}`)
            setLoadingState(false)
            if (result.data.products.length < 1) {
                showAlert(true, "blue", `sorry No Item check something Else`);
            } else {
                setproduct(result.data.products)
            }


        } catch (error) {
            setLoadingState(false)
        }
    }

    // function OpenFilterModal() {
    //     setFilterModal(true)

    // }

    return (
        <div>
            <section className="relative border-t border-b border-slate-600 grid items-cente" >
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>
                <div onClick={() => setshowFilter(!showFilter)} className="relative col-start-1 row-start-1 py-4">
                    <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8 text-white">
                        <div>
                            <button type="button" className="group text-white font-medium flex items-center" aria-controls="disclosure-1" aria-expanded="false">
                                <svg className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"></path>
                                </svg>                        Filters
                            </button>
                        </div>
                    </div>
                </div>
                {/* <button className='text-red-300' onClick={getFilter}>do som</button> */}

                <div className="border-t border-gray-700 py-10 bg-slate-800 overflow-y-auto h-59" style={{ display: showFilter ? 'block' : 'none' }}>
                    <div className="max-w-7xl mx-auto px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-4 md:gap-x-6 place-content-center">

                            {/* sort start */}
                            <fieldset>
                                <legend className="block font-medium shadow-2xl sticky text-white">Sort</legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4 max-h-72 ">
                                    <select defaultValue={'sort'} onChange={handleFilter} className="w-full bg-slate-700 text-white rounded p-2 mr-4 border focus:outline-none focus:border-blue-500 " name="sort" id="">
                                        <option disabled value="sort">Sort</option>
                                        <option value="newest">Newest</option>
                                        <option value="asc">price (lower)</option>
                                        <option value="desc">Price (expensive)</option>
                                        <option value="oldest">Oldest</option>
                                    </select>
                                </div>
                                {/* color end */}


                            </fieldset>
                            {/* sort End */}

                            <fieldset>
                                <legend className="block font-medium shadow-2xl sticky text-white">Color</legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4 max-h-72 overflow-y-scrool">
                                    <select defaultValue={'color'} onChange={handleFilter} className="w-full bg-slate-700 text-white rounded p-2 mr-4 border focus:outline-none focus:border-blue-500 " name="color" id="">
                                        <option value="color" disabled>Color</option>
                                        <option value="red" className='capitalize'>red</option>
                                        <option value="brown" className='capitalize'>brown</option>
                                        <option value="blue" className='capitalize'>blue</option>
                                        <option value="black" className='capitalize'>black</option>
                                        <option value="purple" className='capitalize'>purple</option>
                                        <option value="white" className='capitalize'>white</option>
                                        <option value="light-brown" className='capitalize'>light-brown</option>
                                        <option value="dark-blue" className='capitalize'>dark-blue</option>
                                    </select>
                                </div>

                            </fieldset>
                            {/* color end */}

                            <fieldset>
                                <legend className="block font-medium text-white">Size</legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4 max-h-72 overflow-y-scrool">
                                    <select defaultValue={'size'} onChange={handleFilter} className="w-full bg-slate-700 text-white rounded p-2 mr-4 border focus:outline-none focus:border-blue-500 " name="size" id="">
                                        <option value="size" disabled>size</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xs">XS</option>
                                        <option value="xl">XL</option>
                                    </select>
                                </div>

                            </fieldset>
                            {/* size end */}

                        </div>
                        {/* filter items button  dtill working on it*/}
                        {/* <button onClick={OpenFilterModal} className="rounded px-2 py-2 m-1 my-5 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                            Or: Filter By:
                        </button> */}
                        {/* filter items button end */}
                    </div >
                </div >
            </section >

        </div>
    )
}

export default FilterAcceOut