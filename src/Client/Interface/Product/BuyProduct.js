import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { GlobalDisplayAlert } from '../../Context/Alert';
import Loading from '../../NotFound/Loading';
import { addProduct, addFavorite } from '../../REDUX/ReduxMain.js/AddToCart';
import { PublicRequest } from '../../RequestMethod';
import { v4 as uuidv4 } from 'uuid';
import RelatedProduct from './RelatedProduct';
// import { Rate } from 'antd'


function BuyProduct() {
    let ProdCat
    let { pathname } = useLocation()
    const location = pathname.split('/')[2]
    const { showAlert } = GlobalDisplayAlert()
    const [singleProd, setsingleProd] = useState()
    /* what to send to database */
    const [size, setsize] = useState()
    const [color, setcolor] = useState()
    const [quantity, setquantity] = useState(1);
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
            showAlert(true, "red", `Please Make sure You Pick Size Color`);
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
    }, [pathname])





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
                        <h1 className="text-3xl text-white text-center">{ProdCat}</h1>
                        {/* <!-- Product details --> */}
                        <div className="max-w-2xl mx-auto mt-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                                {/* <!-- Information --> */}
                                <div className="lg:col-start-8 lg:col-span-5">
                                    {/* <!-- Title --> */}
                                    <h1 className="text-3xl font-bold text-gray-100">{singleProd.title}</h1>
                                    {/* <!-- Price --> */}
                                    <div className="mt-3">
                                        <h2 className="text-white">Product information</h2>
                                        <p className="text-3xl text-gray-100">
                                            $ {singleProd.price}
                                        </p>
                                    </div>
                                    <p>
                                    </p>
                                    {/* <!-- Rating --> */}
                                    <div className="mt-3">
                                        <h3 className="text-white">Reviews</h3>
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
                                            {singleProd.rating && <div className="ml-4 flex">
                                                <Link to='#' className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                                    See all {singleProd.rating[0].count} reviews
                                                </Link>
                                            </div>}
                                            <p className="sr-only">4.3333333333333 out of 5 stars</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Media --> */}
                                {/* all category pic */}
                                <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                                    <div className="flex gap-x-2.5">


                                        {/*  overflow-x-scroll scroll-no-bar scroll-smooth */}
                                        <div x-ref="slider" className="flex flex-1 snap-mandatory snap-x w-auto">
                                            <div className="snap-center flex-shrink-0 w-full h-full">
                                                <img srcSet={singleProd.image} alt={singleProd.title} loading='lazy' className='w-[300px] h-[400px] object-fit' />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Options and details --> */}
                                <div className="mt-8 lg:col-span-5">
                                    {/* <!-- Options and Quantity form --> */}
                                    <div>
                                        {singleProd.color && singleProd.color.length > 0 &&
                                            <div className="">


                                                <fieldset className="mt-2">
                                                    <legend className="text-white">
                                                        Choose a Color
                                                    </legend>
                                                    <div className="flex items-center space-x-3">{/* focus:outline-none ring-2 ring-blue-500 */}

                                                        {singleProd.color.map((color, index) => (
                                                            color.split(',').map((c, i) => (
                                                                <label key={uuidv4()} onClick={() => { getColorIndex(i); setcolor(c) }} className={`-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer bg-${c} ${i === colorIndex ? 'focus:outline ring-2 ring-blue-500' : ''}`} style={{ background: color }}>
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
                                                    <legend className="text-white">
                                                        Choose a Size
                                                    </legend>
                                                    {/* product size implementation */}
                                                    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">

                                                        {sizes.map((size, index) => (
                                                            <label key={uuidv4()} onClick={() => { getSizeIndex(index); setsize(size) }} className={`flex justify-center items-center px-3 py-3 text-sm text-white font-medium uppercase rounded-md border cursor-pointer sm:flex-1 focus:outline-none 
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
                                                <input onChange={(e) => setquantity(Number(e.target.value))} value={quantity} className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md py-3 w-28 text-sm text-center sm:text-base show-spinners" type="number" id="productQuantity" min="1" max="100" />
                                            </div>
                                            <div className="flex w-full">
                                                {
                                                    singleProd.inStock ?
                                                        <button onClick={AddCart} className="inline-flex items-center justify-center text-sm border border-transparent rounded-md font-medium focus:outline-none focus:ring disabled:opacity-25 disabled:cursor-not-allowed transition bg-blue-600 text-white hover:bg-blue-500 focus:border-blue-700 focus:ring-blue-200 active:bg-blue-600 flex-1 px-8 py-3 sm:w-full sm:text-base">
                                                            Add to cart
                                                        </button>
                                                        :
                                                        <button className="inline-flex items-center justify-center text-sm border border-transparent rounded-md font-medium focus:outline-none focus:ring disabled:opacity-25 disabled:cursor-not-allowed transition bg-blue-600 text-white hover:bg-blue-500 focus:border-blue-700 focus:ring-blue-200 active:bg-blue-600 flex-1 px-8 py-3 sm:w-full sm:text-base">
                                                            Not inStock
                                                        </button>
                                                }
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Loading />
            }

            <RelatedProduct ProdCat={ProdCat} />
        </div >
    )
}

export default BuyProduct