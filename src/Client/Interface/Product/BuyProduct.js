import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { GlobalDisplayAlert } from '../../Context/Alert';
import Loading from '../../NotFound/Loading';
import { addProduct, addFavorite } from '../../REDUX/ReduxMain.js/AddToCart';
import { PublicRequest } from '../../RequestMethod';
import { v4 as uuidv4 } from 'uuid';
// import { Rate } from 'antd'


function BuyProduct() {
    let ProdCat
    let { pathname } = useLocation()
    const location = pathname.split('/')[2]
    const { showAlert } = GlobalDisplayAlert()
    const [singleProd, setsingleProd] = useState()
    // const [quantValue, setquantValue] = useState(1)
    /* what to send to database */
    const [size, setsize] = useState()
    const [color, setcolor] = useState()
    const [quantity, setquantity] = useState();
    const dispatch = useDispatch();
    ProdCat = singleProd?.category[0]


    /* i write a function that perform addd to cart function and display alert, the fuction will onlu be called on ADDTOCART*/
    function doAddTOCartFunc(product) {
        return (dispatch(addProduct(product)), showAlert(true, "green", `Item Added To Cart Successfully`))
    }

    /* add to cart button, doAddTOCartFunc() will be called  */
    const AddCart = () => {
        const { image, price, title, _id } = singleProd
        const product = { image, price, title, _id, size, color, quantity, ID: uuidv4() }

        if (ProdCat === 'maybelline') {
            doAddTOCartFunc(product)
            return
        }
        if (!size || !color || !quantity) {
            showAlert(true, "red", `Please Make sure You Pick Size Color And Quantity`);
            return
        } else {
            doAddTOCartFunc(product)
        }
    }
    /* addFavorite */
    const addFavoriteProd = () => {
        const { image, price, title, _id } = singleProd;
        const favorite = { image, price, title, _id, ID: uuidv4() }
        dispatch(addFavorite(favorite))
        showAlert(true, "yellow", `Item Added To Favorite Successfully`)
    }

    /* work with products */


    useEffect(() => {
        const getSingleProd = async () => {
            const res = await PublicRequest.get(`/product/${location}`)

            setsingleProd(res.data)
        }
        getSingleProd()
    }, [])





    const [sizeindex, setsizeindex] = useState();
    const [colorIndex, setcolorIndex] = useState();


    function getSizeIndex(index) {
        setsizeindex(index)
    }
    function getColorIndex(index) {
        setcolorIndex(index)
    }
    let sizes = ['xs', 's', 'm', 'l', 'xl'];
    // let colors = ['red', 'yellow', 'green', 'purple']

    return (
        <div className='mt-20'>
            {
                singleProd ?

                    <div className="bg-slate-900 mt-20 py-10">
                        {/* <!-- Product details --> */}
                        <div className="max-w-2xl mx-auto mt-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                                {/* <!-- Information --> */}
                                <div className="lg:col-start-8 lg:col-span-5">
                                    {/* <!-- Title --> */}
                                    <h1 className="text-3xl font-bold text-gray-100">{singleProd.title}</h1>
                                    {/* <!-- Price --> */}
                                    <div className="mt-3">
                                        <h2 className="sr-only">Product information</h2>
                                        <p className="text-3xl text-gray-100">
                                            $ {singleProd.price}
                                        </p>
                                    </div>
                                    <p>
                                    </p>
                                    {/* <!-- Rating --> */}
                                    <div className="mt-3">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                {/* <div className="h-5 w-5 flex-shrink-0 text-yellow-400 flex mb-10">
                                                    <Rate className="h-5 w-5 flex-shrink-0 text-yellow-400" allowHalf defaultValue={singleProd.rating[0].rating} />
                                                </div> */}

                                                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 flex">
                                                <Link to='#' href="#reviews" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                                    See all {singleProd.rating[0].count} reviews
                                                </Link>
                                            </div>
                                            <p className="sr-only">4.3333333333333 out of 5 stars</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Media --> */}
                                {/* all category pic */}
                                <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                                    <div x-data="" className="flex gap-x-2.5">


                                        {/* <div className="hidden sm:block sm:w-20">
                                            <div className="h-full relative overflow-auto snap-y snap-mandatory scroll-no-bar">
                                                <div className="absolute top-0 left-0 w-full h-full space-y-1">
                                                    <div className="snap-start">
                                                        <button className="w-full h-full">
                                                            <img src="https://demo.cartify.dev/storage/media/565/conversions/organic-chambray-embroidered-button-down-chambray-1-thumb.jpg" alt="Organic Chambray Embroidered Button Down" width="80" height="100" className="shrink-0 w-20 bg-white" />
                                                        </button>
                                                    </div>
                                                    <div className="snap-start">
                                                        <button className="w-full h-full">
                                                            <img src="https://demo.cartify.dev/storage/media/566/conversions/organic-chambray-embroidered-button-down-chambray-2-thumb.jpg" alt="Organic Chambray Embroidered Button Down" width="80" height="100" className="shrink-0 w-20 bg-white" />
                                                        </button>
                                                    </div>
                                                    <div className="snap-start">
                                                        <button className="w-full h-full">
                                                            <img src="https://demo.cartify.dev/storage/media/567/conversions/organic-chambray-embroidered-button-down-chambray-3-thumb.jpg" alt="Organic Chambray Embroidered Button Down" width="80" height="100" className="shrink-0 w-20 bg-white" />
                                                        </button>
                                                    </div>
                                                    <div className="snap-start">
                                                        <button className="w-full h-full">
                                                            <img src="https://demo.cartify.dev/storage/media/568/conversions/organic-chambray-embroidered-button-down-chambray-4-thumb.jpg" alt="Organic Chambray Embroidered Button Down" width="80" height="100" className="shrink-0 w-20 bg-white" />
                                                        </button>
                                                    </div>
                                                    <div className="snap-start">
                                                        <button className="w-full h-full">
                                                            <img src="https://demo.cartify.dev/storage/media/569/conversions/organic-chambray-embroidered-button-down-chambray-5-thumb.jpg" alt="Organic Chambray Embroidered Button Down" width="80" height="100" className="shrink-0 w-20 bg-white" />
                                                        </button>
                                                    </div>
                                                    <div className="snap-start">
                                                        <button className="w-full h-full">
                                                            <img src="https://demo.cartify.dev/storage/media/570/conversions/organic-chambray-embroidered-button-down-chambray-6-thumb.jpg" alt="Organic Chambray Embroidered Button Down" width="80" height="100" className="shrink-0 w-20 bg-white" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/*  overflow-x-scroll scroll-no-bar scroll-smooth */}
                                        <div x-ref="slider" className="flex flex-1 snap-mandatory snap-x w-auto">
                                            <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet={singleProd.image} alt={singleProd.title} loading='lazy' className='w-[300px] h-[400px] object-fit' />

                                            </div>
                                            {/* <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet="https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_800_1000.jpg 800w, https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_669_836.jpg 669w, https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_559_699.jpg 559w, https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_468_585.jpg 468w, https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_391_489.jpg 391w, https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_327_409.jpg 327w, https://demo.cartify.dev/storage/media/566/responsive-images/organic-chambray-embroidered-button-down-chambray-2___responsive_274_343.jpg 274w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgODAwIDEwMDAiPgoJPGltYWdlIHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPVEFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FLQUFnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEF3ZjIvUEZCR3JXbHBuTWZ0WGt3dWowbFk4bS9aemhsWHhQRkpHd0NISFdvcVR1ckhxMEtWbmMvVHY0WlJNbWl4aHVwRk43SThxcjhiT3ZaRG1vTWo4eGYyMjdtMTFueFpiMmxvVFBNaDV4elhSRjNWeW9LN3NjNThGdEYxSFQ5VHQyU0YxYkFPU0t4akgya3JJOWwxZll3dXo5QVBoYjRvdlJwaVIzQ2JTb3htdlJlR2xiVStlblhqS1Z6MGNheGNGQXdqM0ErbGNjb0pPeFNsYytRYno0VFdPczY2ZFNuaCsxeUh1M05lOTlXaW82bm54eEVsSzZQUVBEUHcxczB1SXo5bkVHMGRoaXVHbGh1U3BkSG9WOFo3V255blo2bzBIaDJ4QWhHMER1SzltMm1wNDNVNzd3ZnFBMUhSNDNQSnhYem1Lanl6UFRvdThUd2Z3WGV1dDM1ai9ORG5xYStqbEsyalBLUzZub2VwNnZGREdqd3JqM0ZZUWF1V2NoNDYxaDIwamNGTEhzQlhURjNKbG9kajhIOWVlNTB0WVpWS05qZ0d2R3g5T3o1anR3MHVoNWpvOXZMcCtta0VjN3MxNmNvdHoxT1JOY3AyYTNDM0drcmtmTUJXV2tIY2NFNXV5TXVab0JFcHVnREhuZ0dzL3JrT2JsUjN2QXpVZVpuVmVHN3UzMC9FcUlGWEhHSzU4WExuMFJGR0hLZi8yUT09Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="40vw" src="https://demo.cartify.dev/storage/media/566/conversions/organic-chambray-embroidered-button-down-chambray-2-responsive.jpg" alt="organic-chambray-embroidered-button-down-chambray-2.jpg" width="800" height="1000" />

                                            </div>
                                            <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet="https://demo.cartify.dev/storage/media/567/responsive-images/organic-chambray-embroidered-button-down-chambray-3___responsive_800_1000.jpg 800w, https://demo.cartify.dev/storage/media/567/responsive-images/organic-chambray-embroidered-button-down-chambray-3___responsive_669_836.jpg 669w, https://demo.cartify.dev/storage/media/567/responsive-images/organic-chambray-embroidered-button-down-chambray-3___responsive_560_700.jpg 560w, https://demo.cartify.dev/storage/media/567/responsive-images/organic-chambray-embroidered-button-down-chambray-3___responsive_468_585.jpg 468w, https://demo.cartify.dev/storage/media/567/responsive-images/organic-chambray-embroidered-button-down-chambray-3___responsive_391_489.jpg 391w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgODAwIDEwMDAiPgoJPGltYWdlIHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPVEFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FLQUFnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErd3JPL3ZvUDlaSHVGZVJhUFE2bEl5TmUxcVhUWWJpNmpRaVFLY0NybHBFMHBSNTUyUE0vaGw4ZnA5VThjemFGcVdGWXRoQ2F4V3EwT21yUzltejI5MUUyckt3T1FSVy8yVGk2bWpieGc5UlhHbUJ6WGlLTzJIbkpPQUVZWXJ0aEIxRllsVlBaUG1QbS9YdmgydmgvNGhXR3QyclpFa2d6ajYxMFR3M3NvM05mclRydXpQcGZUMWtsRURLM3pGQWF3dm9aTTA3TFdMYVVaM2dWeWNqUmExT1A4ZXp4ektHamtHTThrR3ZVd201eTRpNlJ5TjNvcmVJcHJLS0NRYmtZSE5laGlmNFp6VVhhUjZucFZzMW5KQkM1eXlLQWE4SjdIb3ZWbkQyc3BlTXFHSXpYUzFjRTdPNWxhN28xelBhYkk1bVlrMTBZWktMTU1USnpKdkNGbExwTjVFMGhKWWRjMTI0aXpob2NsSlBtUFFWMVZQdGdrYmdZcnczRjJQU1BFYkw0bFdoSUFVMVh0VWErelowK2grTjdiVWJsWWxYSlByUXFsOWhPbjNOaS93QlZndFpQTmtBVUN0ZmFPMnBIczFmUXJIeGhZdVB2MUh0RVZ5TS8vOWs9Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="40vw" src="https://demo.cartify.dev/storage/media/567/conversions/organic-chambray-embroidered-button-down-chambray-3-responsive.jpg" alt="organic-chambray-embroidered-button-down-chambray-3.jpg" width="800" height="1000" />

                                            </div>
                                            <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet="https://demo.cartify.dev/storage/media/568/responsive-images/organic-chambray-embroidered-button-down-chambray-4___responsive_800_1000.jpg 800w, https://demo.cartify.dev/storage/media/568/responsive-images/organic-chambray-embroidered-button-down-chambray-4___responsive_669_836.jpg 669w, https://demo.cartify.dev/storage/media/568/responsive-images/organic-chambray-embroidered-button-down-chambray-4___responsive_559_699.jpg 559w, https://demo.cartify.dev/storage/media/568/responsive-images/organic-chambray-embroidered-button-down-chambray-4___responsive_468_585.jpg 468w, https://demo.cartify.dev/storage/media/568/responsive-images/organic-chambray-embroidered-button-down-chambray-4___responsive_391_489.jpg 391w, https://demo.cartify.dev/storage/media/568/responsive-images/organic-chambray-embroidered-button-down-chambray-4___responsive_327_409.jpg 327w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgODAwIDEwMDAiPgoJPGltYWdlIHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPVEFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FLQUFnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEremRRdm9McXhZSXd6NlY1RUl0TTdHN284cytNL3dBVjd6NFcrRTB1N09Ielc3NHB5MWtYQ0xhMExYd0grTkgvQUF0Znd6SkxLb1NkQjh3cEpXWVNWajFYUVlzUU45YWRUY3pSUnZ0SmhpdG1kUmpGS0VtMlM5RDVqL2E3MWVXMjhFTkhFQXlqcjdWMVNvM1hNVlJyMmZLZVhmc1IrUDhBN05xZHhwejhDUTFtb1hadlVlaDk4YVRxQ1F3Zk12WHZVVGpxWUpqZGJtRUdtU1Axd0t5cEwzaUo3SHpoOFUvRFAvQ2Y2UmRXblBPUU0xN2tFcHJsT0MvSkxtUEl2aEw4R2JyNGFlSzRydDVEdGQrQVByU1dINU5XYnl4SE9ySDNiNGRDWEdseE95NXlvcnlLcnRJNkk3SE1mMisxN0FZcEJrR3RGVFNkME42bkkrSXZMc1pWS29GVTE2MkdzZWJWdmN0YUJwMWpxcER6S0dkZVFhdkV5dEhRS01idlU5SzBTUklyTUlwQUE0RmZQVkhxZW1rZWRXa2gzQ3U1a0xVdWVKdEhUVXJHTEhEZXRZeHF5aTlDL1p4bHVOMHJTRTBlMEJWc3NSV3JxU251VHlLT3hPTlVudHhoR0lGWnVDa1BZLy9aIj4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="40vw" src="https://demo.cartify.dev/storage/media/568/conversions/organic-chambray-embroidered-button-down-chambray-4-responsive.jpg" alt="organic-chambray-embroidered-button-down-chambray-4.jpg" width="800" height="1000" />

                                            </div>
                                            <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet="https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_800_1000.jpg 800w, https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_669_836.jpg 669w, https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_560_700.jpg 560w, https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_468_585.jpg 468w, https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_391_489.jpg 391w, https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_327_409.jpg 327w, https://demo.cartify.dev/storage/media/569/responsive-images/organic-chambray-embroidered-button-down-chambray-5___responsive_274_343.jpg 274w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgODAwIDEwMDAiPgoJPGltYWdlIHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPVEFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FLQUFnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEvUkNhZFlsTE1jQVUwcjZJVGRqajlmOEFpRmI2Uk1FQTMrNHJzaGhwUzNPT2VKakVmb254QXRkVGtDTjhoUHJTbmhwUkhERVJrZFpCT3N5aGtPUWZTdVJxMmgxcDNPVzhhYXViYUV3b2NNUlhiaHFhazdzNGNUUGxWa2VWWHNFMTZ6Tjk0ZzU1cjJkdGp4NzNJYmVPYUFOSjkwcjB4UTlWcUNiV3g2bDRCMXMzRm1zVWo1Y2V0ZU5pYWZLN285akRWT1pXWm5mRUJ0bDBoQXJmQzNzWVlyVm5JUlNZU1E1NU5laHVqenRtTWRrTnR0SjVOSjZGSTJ2QWJOSnF3Vk03VjcxNXVKbW5vZWxoWU5hblorTmRGKzIyalNxUG1YbXNjUFU1WFkzeEZKU1Z6eDY3MU1XRXJ4N0N6VjdhMlBFZWpMT2pKOXVWV2xKWEo2R3M2dndzMHAyNWoyUHd2b05yWTJxU3hJTjdESk5mUHliYjFQb0lKSmFHNWRXNjNFVFJzTXFSaXBUczdsTlgwT012UGh0YTNGdzBnQTVPYTdZNHB4Und6d3FrN29kQjhQSUlwRWJPQXA2Q2xQRXVTc09HR2pGM094dExjVzBTeHIwQXhYRWRxVmovMlE9PSI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="40vw" src="https://demo.cartify.dev/storage/media/569/conversions/organic-chambray-embroidered-button-down-chambray-5-responsive.jpg" alt="organic-chambray-embroidered-button-down-chambray-5.jpg" width="800" height="1000" />

                                            </div>
                                            <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet="https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_800_1000.jpg 800w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_669_836.jpg 669w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_560_700.jpg 560w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_468_585.jpg 468w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_391_489.jpg 391w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_327_409.jpg 327w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_274_343.jpg 274w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_229_286.jpg 229w, https://demo.cartify.dev/storage/media/570/responsive-images/organic-chambray-embroidered-button-down-chambray-6___responsive_192_240.jpg 192w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgODAwIDEwMDAiPgoJPGltYWdlIHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPVEFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FLQUFnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE3SzkwSjlVOFlyT29KUk9jMTlIZXg0SjZCYWFndHJFSVp1M0FyS3BVVUZkampGdDJOV09JR01NUHVtbEdhbXJvYlZ0eWpmUmpHQld0MGliRmJ3cGJ3U2gxZkhuZS9XczVUU2RoeFZ5ZTUwY202SmZuQjRyT2NWTldaU2JpOURYdDQ5eUxHZU1DcGlsQldRMzcycktHcjZOY1hKSGt0dEZSVVVwYkZ4YVc1Qm8ybXJhYTFra2crbFRPaTVTNWt4Um5aV04zWDBOcVZtVVpYdlhTdXhreDFqY0pQRXJxS0dOTzVOTmZSUm5ERUNzcFRVTnkwbTlqTDFNZlk5VGlsSEFKcmN5ZWh1NmpDTHpUczljcm1vMkszTXZ3K3FtTjRpUmxUVGJFa1Z0V3N0ays3SksrbGMxV2txcXN6YU1uSFZFVjFLMm82VXM3RERyelR3dGYyOE9aRTFhZkk3RzNvMXg5dDByQlBJR0s2Skt4bW1jL3BobHNkYmxCYktzZWxjMFl6NXRkalM2c2RCZUlIWGNlYzF1a0kvL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="40vw" src="https://demo.cartify.dev/storage/media/570/conversions/organic-chambray-embroidered-button-down-chambray-6-responsive.jpg" alt="organic-chambray-embroidered-button-down-chambray-6.jpg" width="800" height="1000" />

                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Options and details --> */}
                                <div className="mt-8 lg:col-span-5">
                                    {/* <!-- Options and Quantity form --> */}
                                    <div>
                                        {singleProd.color && singleProd.color.length > 0 &&
                                            <div className="">
                                                <h3 className="text-sm font-medium text-gray-100">
                                                    Color
                                                </h3>

                                                <fieldset className="mt-2">
                                                    <legend className="sr-only">
                                                        Choose a Color
                                                    </legend>
                                                    <div className="flex items-center space-x-3">{/* focus:outline-none ring-2 ring-blue-500 */}

                                                        {singleProd.color.map((color, index) => (
                                                            color.split(',').map((c, i) => (
                                                                <label key={color.color} onClick={() => { getColorIndex(i); setcolor(c) }} className={`-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer bg-${c} ${i === colorIndex ? 'focus:outline ring-2 ring-blue-500' : ''}`} style={{ background: color }}>
                                                                    <input type="radio" value="660" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                                    <p id="color-choice-0-label" className="sr-only">
                                                                        Chambray
                                                                    </p>
                                                                    <span aria-hidden="true" className="w-8 h-8 rounded-full border border-black border-opacity-10 bg-center bg-cover"
                                                                    // style={{ backgroundImage: "url('https://demo.cartify.dev/storage/media/1061/chambray.png')" }}
                                                                    ></span>
                                                                </label>
                                                            ))

                                                        ))}

                                                    </div>
                                                </fieldset>

                                            </div>
                                        }
                                        {singleProd.size && singleProd.size.length > 0 &&
                                            <div className="mt-8">
                                                <h3 className="text-sm font-medium text-gray-100">
                                                    Size
                                                </h3>

                                                <fieldset className="mt-2">
                                                    <legend className="sr-only">
                                                        Choose a Size
                                                    </legend>
                                                    {/* product size implementation */}
                                                    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">

                                                        {sizes.map((size, index) => (
                                                            <label key={size.size} onClick={() => { getSizeIndex(index); setsize(size) }} className={`flex justify-center items-center px-3 py-3 text-sm text-white font-medium uppercase rounded-md border cursor-pointer sm:flex-1 focus:outline-none 
                                                    whitespace-nowrap ${index === sizeindex ? 'ring-2 ring-offset-2 ring-blue-500 bg-blue-600 border-transparent text-white hover:bg-blue-700' : ''}`}>

                                                                <input type="radio" value="378" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                                <p id="size-choice-0-label uppercase">
                                                                    {size}
                                                                </p>
                                                            </label>
                                                        ))}

                                                    </div>
                                                </fieldset>

                                            </div>
                                        }

                                        <div className="flex items-center space-x-3 mt-8">
                                            <div>
                                                <label className="block font-medium text-sm text-gray-200 -mt-7" htmlFor="productQuantity">
                                                    Quantity
                                                </label>
                                                <input onChange={(e) => setquantity(Number(e.target.value))} className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md py-3 w-28 text-sm text-center sm:text-base show-spinners" type="number" id="productQuantity" min="1" max="100" />
                                            </div>
                                            <div className="flex w-full">
                                                <button onClick={AddCart} className="inline-flex items-center justify-center text-sm border border-transparent rounded-md font-medium focus:outline-none focus:ring disabled:opacity-25 disabled:cursor-not-allowed transition bg-blue-600 text-white hover:bg-blue-500 focus:border-blue-700 focus:ring-blue-200 active:bg-blue-600 flex-1 px-8 py-3 sm:w-full sm:text-base">
                                                    Add to cart
                                                </button>
                                                <button onClick={addFavoriteProd} className="button button-icon button-pink bg-blue-300">
                                                    <i className="bi bi-balloon-heart-fill text-red-600 text-2xl"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Description --> */}
                                    <div className="mt-10">
                                        <h2 className="text-sm font-medium text-gray-100">
                                            Details
                                        </h2>
                                        <div className="mt-4 prose prose-sm max-w-none text-gray-300">
                                            <p>{singleProd.description}

                                            </p>
                                            {/* <ul>
                                                <li>
                                                    <p>100% organic cotton
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>Features: patch pocket at wearer’s left chest
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>Frankie is 5'8" and wearing a size S
                                                    </p>
                                                </li>
                                                <li>
                                                <p>Machine wash cold, line dry</p>
                                                </li>
                                                <li>
                                                <p>Made responsibly in Vietnam</p></li></ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Loading />
            }
        </div >
    )
}

export default BuyProduct