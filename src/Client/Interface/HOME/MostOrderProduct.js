import React from 'react'
import './Style.css'

function MostOrderProduct() {
    let arr = [1, 2, 3, 4, 4, 4]

    return (
        <div>
            {/* <!-- component --> */}
            <div className="flex flex-col bg-slate-900 m-auto p-auto">
                <h1
                    className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-white"
                >
                    Most Order Product
                </h1>
                <div
                    className="flex  pb-10 hide-scroll-bar "
                >
                    <div
                        className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 gap-x-16 overflow-x-scroll"
                    >
                        {/* start */}
                        {
                            arr.map(() => (
                                <div className="group relative ">
                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80 bg-slate-900">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-slate-200">
                                                <a>
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-200">Black</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-400">$35</p>
                                    </div>
                                </div>
                            ))
                        }

                        {/* end */}
                    </div>
                </div>
            </div>
            <style>
                {/* .hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
} */}
            </style>
        </div>
    )
}

export default MostOrderProduct