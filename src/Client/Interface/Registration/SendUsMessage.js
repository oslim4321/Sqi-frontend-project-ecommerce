import React, { useState } from 'react'
import { GlobalDisplayAlert } from '../../Context/Alert';

function SendUsMessage() {
    const { showAlert } = GlobalDisplayAlert()
    const [Review, setReview] = useState()
    const bgImag = '/Images/cloth_store.webp';
    const [messageSent, setmessageSent] = useState(false)
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImag})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: '1',
        // height: '100vh',
    }

    function DisplAlert() {
        return showAlert(true, "red", `All Field Are Required Before Submit`);
    }


    function CostomerReview(e) {
        setReview({ ...Review, [e.target.name]: e.target.value })

    }
    function sendReview(e) {
        if (Review) {
            if (!Review.email || !Review.subject || !Review.message) {
                DisplAlert()
                return;
            }
            setmessageSent(true)
            setTimeout(() => {
                setmessageSent(false)
            }, 3000);
        }
        // DisplAlert()

    }



    return (
        <div>
            <section className="" style={backgroundImage}>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-100 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-100 dark:text-gray-400 sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste. Exercitationem rerum iure sapiente molestias aliquam harum commodi ipsam sint?.</p>
                    <div className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg font-medium text-white dark:text-gray-300">Your email</label>
                            <input onChange={CostomerReview} type="email" id="email" className="bg-slate-900 text-white shadow-sm 50 border border-slate-900  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative" placeholder="name@gmail.com" required name='email' />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-lg font-medium text-white dark:text-gray-300">Subject</label>
                            <input onChange={CostomerReview} type="text" id="subject" className="bg-slate-900 text-white block p-3 w-full text-sm rounded-lg border border-slate-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative" placeholder="Let us know how we can help you" required name='subject' />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-lg font-medium text-white dark:text-gray-400">Your message</label>
                            <textarea onChange={CostomerReview} id="message" rows="6" className=" text-white block p-2.5 w-full text-sm bg-slate-900 rounded-lg shadow-sm border border-slate-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 relative" placeholder="Leave a comment..." name='message'></textarea>
                        </div>
                        <div className='relative' onClick={sendReview} >
                            <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 sm:w-fit hover:bg-primary-800  cursor-pointer">Send message</button>
                        </div>
                    </div>

                </div>
                {/* <button onClick={sendReview} className='text-white'>send</button> */}
            </section>

            {messageSent && <div className="bg-green-100 rounded-md p-3 flex">
                <svg
                    className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                </svg>

                <div className="text-green-700">
                    <div className="font-bold text-xl">Your Message Have Been Delivered</div>

                    <div>Thanks for contacting us we will get back to you.</div>
                </div>
            </div>}
        </div>
    )
}

export default SendUsMessage