import React, { useState } from 'react'

function ModalFilter({ setFilterModal }) {
    const [scrollColor, setscrollColor] = useState(false)
    const [scrollSize, setscrollSize] = useState(false)


    const [Filter, setFilter] = useState({
        size: [],
    });

    function handleFilter(e) {

        const { value, checked } = e.target;
        // console.log(value, 'is', checked)

        const { size } = Filter;

        if (checked) {
            setFilter({
                size: [...size, value],
            });
        }
        else {
            setFilter({
                size: size.filter((e) => e !== value),
            });
        }

    }
    console.log(Filter)
    return (
        <div className=''>

            <div className="flex items-center justify-center h-full absolute right-0 left-0  z-50 bg-slate-900">
                <div className="bg-gray-100 w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3">
                    <div
                        className="flex justify-between items center border-b border-gray-200 py-3"
                    >
                        <div className="flex items-center justify-center">
                            <p className="text-xl font-bold text-gray-800">Ghost Filter</p>
                        </div>

                        <div
                            onClick={() => setFilterModal(false)}
                            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
                        >
                            x
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="text-sm">Filter By:</p>

                        <div className="flex justify-between items-center">
                            <fieldset >
                                <legend className="block font-medium">Price</legend>
                                <div className="space-y-6 sm:pt-4 sm:space-y-4 flex items-center justify-center">
                                    <div>
                                        <label className="block font-medium text-sm text-gray-700">
                                            From
                                        </label>
                                        <div className="relative rounded-md ">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">
                                                    $
                                                </span>
                                            </div>
                                            <input className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md no-spinners sm:text-sm pl-7 mt-1 block w-full" type="text" />
                                        </div>
                                    </div>


                                    {/* to */}
                                    <div>
                                        <label className="block font-medium text-sm text-gray-700">
                                            To
                                        </label>
                                        <div className="relative rounded-md ">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">
                                                    $
                                                </span>
                                            </div>

                                            <input className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md no-spinners sm:text-sm pl-7 mt-1 block w-full" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>



                        {/* <p className="text-sm">Or copy link</p> */}
                        {/* color start */}
                        <div className="flex items-center justify-evenly my-2">
                            <fieldset>
                                <legend className="block font-medium text-sm">Color</legend>
                                <div className={`pt-6 space-y-6 sm:pt-4 sm:space-y-4 max-h-52 ${scrollColor ? ' overflow-y-scroll' : ' overflow-y-hidden'}`}>
                                    <div className="flex items-center text-base sm:text-sm">
                                        <input onChange={handleFilter} className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded" type="checkbox" value="Rosewood" name='color' />
                                        <label className="block font-medium text-sm text-gray-700 ml-3 min-w-0 flex-1">
                                            Rosewood
                                        </label>
                                    </div>
                                </div>
                                <button type="button" className="mt-4 inline-flex items-center">
                                    {
                                        scrollColor
                                            ?
                                            <i className="bi bi-dash" onClick={() => setscrollColor(false)}>show less</i>
                                            :
                                            <i className="bi bi-plus" onClick={() => setscrollColor(true)}>show more</i>
                                    }

                                    {/* <i className="bi bi-dash"></i> */}
                                </button>
                            </fieldset>
                            {/* color start */}

                            {/* size start */}
                            <fieldset>
                                <legend className="block font-medium text-sm">Size</legend>
                                <div className={`pt-6 space-y-6 sm:pt-4 sm:space-y-4 max-h-52 ${scrollSize ? ' overflow-y-scroll' : ' overflow-y-hidden'}`}>
                                    <div className="flex items-center text-base sm:text-sm">
                                        <input onChange={handleFilter} className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded" type="checkbox" value="xl" name='size' />
                                        <label className="block font-medium text-sm text-gray-700 ml-3 min-w-0 flex-1">
                                            xl
                                        </label>
                                    </div>

                                </div>
                                <button type="button" className="mt-4 inline-flex items-center">
                                    {
                                        scrollSize
                                            ?
                                            <i className="bi bi-dash" onClick={() => setscrollSize(false)}>show less</i>
                                            :
                                            <i className="bi bi-plus" onClick={() => setscrollSize(true)}>show more</i>
                                    }

                                    {/* <i className="bi bi-dash"></i> */}
                                </button>
                            </fieldset>
                            {/* size end */}

                        </div>


















                        <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2">


                            <input className="w-full outline-none bg-transparent" type="text" placeholder="link" />

                            <button className="bg-indigo-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-indigo-600">
                                Search
                            </button>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default ModalFilter