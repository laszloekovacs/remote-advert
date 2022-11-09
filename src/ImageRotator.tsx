import React, { useEffect, useState } from 'react'
import './style.css'

const timeout = 5000;



function ImageRotator({ urls }: { urls: string[] }) {

    const [counter, setCounter] = useState(0)

    function tick() {
        setCounter(count => count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, timeout)
        return () => clearInterval(interval)
    }, [urls])


    const current = urls[counter % urls.length]


    return (
        <div className='view_container'>
            <img src={current}></img>
            <img className='blur' src={current}></img>
        </div>
    )
}

export default ImageRotator