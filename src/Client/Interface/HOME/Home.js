import Footer from '../Footer/Footer';
import Product from '../Product/Product'
import Category from './Category'
import SendUsMessage from '../Registration/SendUsMessage';
import Snowfall from 'react-snowfall';
import { Link } from 'react-router-dom';
import Cate from './Cate';
import MostOrderProduct from './MostOrderProduct';


function Home() {
    const bgImag = '//cdn.shopify.com/s/files/1/1132/3440/files/NYNE_S22_CAMP_WARM-9_1400x.jpg?v=1627002986';
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImag})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: '1',
    }
    const snow = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
    }
    return (
        <div className='mt-2 relative'>
            <div>
                <div>

                    <div style={snow}>
                        <Snowfall
                            snowflakeCount={100}
                            size={1}
                            swing={1}
                            speed={'10'}
                        />
                    </div>
                    <div className=" pt-16 pb-32 flex content-center items-center justify-center h-screen bg-slate-800" style={
                        backgroundImage
                    }>
                        <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full"></div>
                        <div className="container max-w-8xl relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                    <h1 className="text-white text-4xl font-serif font-extrabold leading-normal mt-0 mb-2 text-shadow-xl md:text-7xl">Your shopping starts with us.</h1>

                                    {/* <!-- component --> */}
                                    <Link to='/AllCatFetch/All'>
                                        <button className="bg-blue text-white font-bold py-2 px-4 border-b-4 focus:border-b-2 focus:border-t-2 border-blue-400 focus:border-red-400 rounded">
                                            Get Started
                                        </button>
                                    </Link>

                                    <div className="text-gray-200">
                                        <p className="undefined text-lg font-light leading-relaxed mt-6 mb-4 text-shadow-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quod vel dolor totam nesciunt odio nostrum quia vero ut officia voluptates voluptatibus ipsa non, accusantium aperiam adipisci corrupti explicabo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Category />
                </div>
            </div>
            <Product />
            {/* <SendUsMessage /> */}

            {/* <MostOrderProduct /> */}
            <Footer />
        </div>
    )
}

export default Home