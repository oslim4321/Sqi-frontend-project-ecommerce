import React from 'react'
import { Link } from 'react-router-dom'
import { PublicRequest } from '../../RequestMethod'
import Cate from './Cate'

function Category() {
    function makeup() {
        const getMakeUp = async () => {
            const result = await PublicRequest.get('/product?makeup=true')
                (result.data)
        }
        getMakeUp()
    }
    let category = [
        {
            // img: "https://demo.cartify.dev/storage/media/1038/womens-tops.jpeg",
            img: "/Images/soft black lady.jpg",
            text: "Women's",
            type: "women's clothing"
        },
        {
            img: "/Images/mens-tees.jpeg",
            // img: "https://demo.cartify.dev/storage/media/1038/womens-tops.jpeg",
            text: "men's",
            type: "men's clothing"
        },
        {
            // img: "https://demo.cartify.dev/storage/media/1039/mens-bottoms.jpeg",
            img: "/Images/bad.jpg",
            text: 'Maybelline',
            type: 'maybelline'
        },
    ]
    return (
        <div className='w-full bg-slate-900 overflow-x-scrool'>
            {/* <div className="max-w-md md:-mt-56 -mt-28 mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8 overflow-x-scroll"> */}
            <div className="max-w-md md:-mt-56 -mt-32 mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
                {
                    category.map((cate) => (
                        <div key={cate.img} className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5
                        transform  transition duration-500 hover:scale-90 hover:bg-blue-600
                        text-white overflow-hidden cursor-pointer card
                        animate-border inline-block from-pink-500 via-blue-500 to-yellow-500 bg-[length:400%_400%] p-0.5 hover:bg-gradient-to-r
                        ">
                            <div className=''>
                                <div aria-hidden="true">
                                    <div className="">
                                        <img src={cate.img} alt="Women's" className="w-full h-full object-center object-cover hover:rounded-2xl" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                                </div>
                                <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                                    <div>
                                        <p aria-hidden="true" className="text-sm text-white">
                                            Shop the collection
                                        </p>
                                        <h3 className="mt-1 font-semibold text-white">
                                            <Link to={`/AllCatFetch/${cate.type}`}>
                                                <span className="absolute inset-0"></span>
                                                {cate.text}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Category