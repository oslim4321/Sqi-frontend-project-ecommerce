import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PublicRequest } from '../../../RequestMethod'
import Loading from '../../../NotFound/Loading'
import Filter from './Filter'
import SkipPages from './SkipPages'
import { GlobalDisplayAlert } from '../../../Context/Alert'
import SearchPage from './SearchPage'
import { format } from 'timeago.js'
import ModalFilter from './ModalFilter'

function AllCatFetch() {
    const { showAlert } = GlobalDisplayAlert()
    const [product, setproduct] = useState()
    const [LoadingState, setLoadingState] = useState(false)
    const { id } = useParams()
    // const [FilterModal, setFilterModal] = useState(false)
    const [searchCate, setsearchCate] = useState()
    const page = localStorage.getItem('pageIndex')

    // const { pathname } = useLocation()
    // /* clear the pagination to 1 if the use leave the all FetchALL */
    // useEffect(() => {
    //     if (!pathname == '/AllCatFetch/All') {
    //         localStorage.setItem('pageIndex', 1)
    //     }
    // }, [pathname])


    useEffect(() => {
        const getProduct = async () => {
            let result
            try {
                if (id === 'All') {
                    result = await PublicRequest.get(`/product?page=${page}`)
                    setproduct(result.data.products)
                    /* if pageiination is greater than One  alert the user to continue from where the stop*/
                    if (page > 1) {
                        showAlert(true, "green", `Hi continue from where you stop`);
                    }
                    return
                }
                result = await PublicRequest.get(`/product?cats=${id}`)
                setproduct(result.data.products)
            } catch (error) {
                showAlert(true, "red", `Database Network Error`);
            }

        }
        getProduct()
    }, [id])

    return (
        <div>
            <main className='bg-slate-900'>
                <div>
                    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white">
                            {id}
                        </h1>
                        <div className="mt-4 max-w-xl mx-auto text-base text-gray-500">
                            <SearchPage setproduct={setproduct} setLoadingState={setLoadingState} />
                        </div>
                        <p className='text-white text-center text-2xl mt-2 capitalize'>{searchCate}</p>
                    </div>

                    {LoadingState ? <Loading />

                        : <div className="pb-24 sm:pb-32 ">
                            <div>
                                {/* <!-- Filters --> */}
                                {/* {!FilterModal ? */}

                                <Filter setsearchCate={setsearchCate} setLoadingState={setLoadingState} product={product} setproduct={setproduct} />


                                {/* <ModalFilter setFilterModal={setFilterModal} />
                                } */}

                                {/* < !--Products --> */}
                                <section aria-labelledby="products-heading" className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                                    <h2 id="products-heading" className="sr-only">
                                        Products
                                    </h2>
                                    < div className="-mx-px border-l border-slate-600 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                                        {product && product.length > 0 ?
                                            product.map((prod) => (

                                                <div key={prod._id} className="group relative p-4 border-r border-b border-slate-600 sm:p-6">
                                                    <div className="rounded-lg overflow-hidden bg-slate-700 aspect-w-8 aspect-h-9 group-hover:opacity-75">
                                                        <img className="w-full h-[250px] object-cover object-center p-1"
                                                            src={prod.image}
                                                            alt={prod.title} width="800" height="100" />

                                                    </div>
                                                    <div className="pt-10 pb-4 text-center">
                                                        <h3 className="text-sm font-medium text-slate-100">
                                                            <Link to={`/BuyProduct/${prod._id}`}>
                                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                                {prod.title}
                                                            </Link>
                                                        </h3>
                                                        <div className="mt-3 flex-1 flex flex-col items-center">
                                                            <p className="sr-only">4.6667 out of 5 stars</p>
                                                            <div className="flex items-center">
                                                                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                                </svg>    <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                                </svg>    <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                                </svg>    <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                                </svg>    <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                                </svg>                            </div>
                                                            <p className="mt-1 text-sm text-slate-100">
                                                                {/* {prod.rating.rate} reviews */}
                                                            </p>
                                                        </div>
                                                        <p className="mt-4 text-base font-medium text-slate-100">
                                                            ${prod.price}
                                                        </p>
                                                        <p className="mt-4 text-base font-medium text-slate-500">
                                                            {format(prod.createdAt)}
                                                        </p>
                                                    </div>
                                                </div>


                                            ))
                                            :
                                            <Loading />
                                        }
                                    </div>
                                    {
                                        product &&
                                        // <Pagination />
                                        <SkipPages category={id} setproduct={setproduct} setLoadingState={setLoadingState} />
                                    }
                                </section >

                            </div >
                        </div >}
                </div >
            </main >
        </div >
    )
}

export default AllCatFetch