import React from 'react'

function Loading() {
    return (
        <div>
            {/* <!-- component --> */}
            <div className='flex items-center justify-center min-h-screen w-full'>
                <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin text-white"></div>
                <p className="ml-2 text-white">Please wait...</p>
            </div>
        </div>
    )
}

export default Loading