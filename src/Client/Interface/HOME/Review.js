import React from 'react'

function Review() {
    return (
        <div>
            {/* <!-- Multicolumn --> */}
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-slate-200 py-24 sm:py-32 ">
                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-8">
                            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                                <div className="md:flex-shrink-0">
                                    <div className="flow-root">
                                        <img className="-my-1 h-24 w-auto mx-auto" src="https://demo.cartify.dev/storage/column-0-Nm6mjE1gCk.svg" alt="Free delivery" />
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                                    <h3 className="text-sm font-semibold tracking-wide text-gray-900">
                                        Free delivery
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-500">
                                        Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                                <div className="md:flex-shrink-0">
                                    <div className="flow-root">
                                        <img className="-my-1 h-24 w-auto mx-auto" src="https://demo.cartify.dev/storage/column-1-KW3uxW3Mb8.svg" alt="10-year warranty" />
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                                    <h3 className="text-sm font-semibold tracking-wide text-gray-900">
                                        10-year warranty
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-500">
                                        We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                                <div className="md:flex-shrink-0">
                                    <div className="flow-root">
                                        <img className="-my-1 h-24 w-auto mx-auto" src="https://demo.cartify.dev/storage/column-2-3Ui7lzo6ZH.svg" alt="Exchanges" />
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                                    <h3 className="text-sm font-semibold tracking-wide text-gray-900">
                                        Exchanges
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-500">
                                        We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                                <div className="md:flex-shrink-0">
                                    <div className="flow-root">
                                        <img className="-my-1 h-24 w-auto mx-auto" src="https://demo.cartify.dev/storage/column-3-QT0BLNw9Pg.svg" alt="For the planet" />
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                                    <h3 className="text-sm font-semibold tracking-wide text-gray-900">
                                        For the planet
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-500">
                                        Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review