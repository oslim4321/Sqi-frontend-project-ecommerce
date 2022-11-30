import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../NotFound/Loading'
import { PublicRequest } from '../../RequestMethod'

function Product() {
    const [product, setproduct] = useState()
    const bgImag = '/Images/best_background.png';
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImag})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: '1',
        width: '100px'
        // height: '100vh',
    }
    useEffect(() => {
        const getProduct = async () => {
            const result = await PublicRequest.get('/product?qnewProd=qnewProd')
            setproduct(result.data.products)
        }
        getProduct()
    }, [])

    return (
        <div>
            {/* <!-- Featured Collection --> */}
            <section aria-labelledby="trending-heading" className=' md:mt-10'>
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <h2 id="favorites-heading" className="text-2xl font-extrabold tracking-tight text-slate-100">
                            Trending Products
                        </h2>
                        <a href="https://demo.cartify.dev/collections/womens" className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
                            Shop the collection<span aria-hidden="true"> →</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-8">
                        {
                            product ?
                                (
                                    product.map((prod) => (
                                        <div key={prod._id} className="group relative">
                                            <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80 bg-slate-700 p-1">
                                                <img className="w-full h-full object-cover object-center object-fit" loading="lazy" src={prod.image}
                                                    alt={prod.title} width="800" height="1000" />
                                            </div>
                                            <div className="mt-4 flex items-start justify-between">
                                                <h3 className="text-sm text-slate-200">
                                                    <Link to={`/BuyProduct/${prod._id}`}>
                                                        <span className="absolute inset-0 text-slate-200"></span>
                                                        {prod.title.slice(0, 12)}...
                                                    </Link>
                                                </h3>
                                                <p className="ml-4 text-sm font-medium text-slate-200">
                                                    $  {prod.price}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )
                                :
                                (<div className="text-2xl"><Loading /></div>)
                        }
                    </div>

                    <div className="mt-8 text-sm md:hidden">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Shop the collection<span aria-hidden="true"> →</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product