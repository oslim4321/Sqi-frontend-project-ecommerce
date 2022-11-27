import React from 'react'

function Cate() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            {/* <!-- component --> */}
            {/* <div className="flex flex-col bg-white m-auto p-auto">
                <h1
                    className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                >
                    Example
                </h1> */}
            <div
                className="flex justify-center items-center overflow-x-scroll pb-10 hide-scroll-bar w-full absolute z-20"
            >
                <div
                    className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                >
                    {
                        arr.map(() => (
                            <div className="inline-block px-3 h-96 -mt-20">
                                <div
                                    className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                ></div>
                            </div>
                        ))
                    }

                    {/* <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div> */}
                </div>
            </div>
            {/* </div> */}
            {/* <style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style> */}
        </div >
    )
}

export default Cate