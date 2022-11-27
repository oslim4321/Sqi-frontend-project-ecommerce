import React from 'react'
import { Link } from 'react-router-dom'

function RegisterSuccessPage() {
    return (
        <div className='flex justify-center items-center flex-col h-[100%] py-7'>
            <h1 className='text-white text-2xl py-3'>Acount Successfully registered You can now login</h1>
            <Link to='/Login'><button className='btn btn-primary'>Go to login</button></Link>
        </div>
    )
}

export default RegisterSuccessPage