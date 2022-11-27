import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PublicRequest } from '../../RequestMethod'

function DoSom() {
    const [product, setproduct] = useState()
    // useEffect(() => {
    //     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    //         // fetch('http://makeup-api.herokuapp.com/api/v1/products.json?10')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setproduct(data)
    //             (product)
    //             (product.length)
    //         });
    // }, [])
    // (product.Handle)
    // (product)

    useEffect(() => {
        const getProduct = async () => {
            const result = await PublicRequest.get('/product')
                (result.data)
            setproduct(result.data)
        }
        getProduct()
    }, [])



    return (
        // <div>
        //     <div>
        //         <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen bg-gray-600">
        //             <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full"></div>
        //             <div className="container max-w-8xl relative mx-auto">
        //                 <div className="items-center flex flex-wrap">
        //                     <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        //                         <h1 className="text-white text-5xl font-serif font-bold leading-normal mt-0 mb-2">Your story starts with us.</h1>
        //                         <div className="text-gray-200">
        //                             <p className="undefined text-lg font-light leading-relaxed mt-6 mb-4">This is a simple example of a Landing Page you can build using Material Tailwind. It features multiple components based on the Tailwind CSS and Material Design by Google.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <section className="pb-20 bg-gray-100 -mt-32">
        //             <div className="container max-w-7xl mx-auto px-4">
        //                 <div className="flex flex-wrap relative z-50">
        //                     <div className="w-full md:w-4/12 px-4 flex justify-center text-center"><div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined"><div className="p-4 undefined"><div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-red-500"><span className="material-icons text-white text-xl leading-none">stars</span></div><h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Awarded Agency</h1><p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</p></div></div></div><div className="w-full md:w-4/12 px-4 flex justify-center text-center"><div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined"><div className="p-4 undefined"><div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-light-blue-500"><span className="material-icons text-white text-xl leading-none">autorenew</span></div><h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Free Revisions</h1><p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.</p></div></div></div><div className="w-full md:w-4/12 px-4 flex justify-center text-center"><div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined"><div className="p-4 undefined"><div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-teal-500"><span className="material-icons text-white text-xl leading-none">fingerprint</span></div><h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Verified Company</h1><p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!</p>
        //                     </div>
        //                     </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        //     </div>

        // </div>

        <div>
            {
                product &&
                product.map((product) => (
                    <>
                        <img width={'150px'} src={product.image_link} alt="" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>brand</p>
                        <p>{product.brand}</p>
                    </>
                ))
            }

        </div>
    )
}

export default DoSom