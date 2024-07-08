import React from 'react'

export default function Home(){
    return(
        <div id='home' className='grid-container grid-container--home'>
            <h1 className='fs-700'>
                <span className='fw-500'>Hi, I'm</span><span className='block fs-800 text-pink-outlined fw-500'>Monse</span>
            </h1>
            <p>I am a software engineer based in <span className='fw-600'>NYC</span> with interests in artificial intelligence, full-stack web/app development, and functional programming.</p>
        </div>
    )
}
