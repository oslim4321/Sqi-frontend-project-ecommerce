import axios from 'axios'
import React from 'react'

function Test() {

    async function getSomeFromServer() {
        const res = axios.get('http://localhost:400/iHaveReqyest')
            (res.data)
    }
    getSomeFromServer()


    return (
        <div>Test</div>
    )
}

export default Test