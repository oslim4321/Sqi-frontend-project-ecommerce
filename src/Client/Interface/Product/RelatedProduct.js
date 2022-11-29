import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../NotFound/Loading';
import { PublicRequest } from '../../RequestMethod';

function RelatedProduct({ ProdCat }) {

  const [category, setcategory] = useState()

  useEffect(() => {
    const getAllRelatedProd = async () => {
      const res = await PublicRequest.get(`/product/related/${ProdCat}`)
      setcategory(res.data)
      // console.log(res.data)
    }

    getAllRelatedProd()
  }, [ProdCat])

  function BuyItem() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='bg-gray-900 p-8'>
      <div className="text-3xl text-white">Related Products</div>

      <div className='p-8 flex gap-x-7 overflow-x-auto no-scrollbar'>
        {
          category ?
            category.map((prod) => (
              <div key={prod._id}>
                <Link to={`/BuyProduct/${prod._id}`} onClick={BuyItem}>
                  <div className=" bg-slate-700 h-40 w-40">
                    <img srcSet={prod.image} className='w-full h-full object-cover' alt={prod.title} loading='lazy' />
                  </div>
                  <p className='text-slate-400'> {prod.title.slice(0, 12)}...</p>
                  <p className='text-slate-400'>{prod.inStock ? 'InStock' : 'Not InStock'}</p>
                  <p className='text-slate-200'>${prod.price}</p>
                </Link>
              </div>
            ))
            :
            <Loading />
        }
        {category && <Link to={`/AllCatFetch/${ProdCat}`}>
          <div className=" bg-black h-40 w-40 hover:bg-slate-800 cursor-pointer">
            <div className="text-2xl flex items-center justify-center h-full text-white text-center">See More Related
              <i className="bi bi-arrow-right mr-2"></i>
            </div>
          </div>
        </Link>}

      </div>
    </div>
  )
}

export default RelatedProduct