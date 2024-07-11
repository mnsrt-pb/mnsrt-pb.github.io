import React from 'react'

export default function About() {
    return (
        <section id='about' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>
                monse/about-me
            </h2>
            <div>
                <p>
                    I study at <span className='fw-600'>New York University</span> 
                    with a major in Computer Science and a minor in Web Programming and applications
                </p>
                <p>
                    I have experience with:
                </p>
                <ul className='grid grid-list command-icon-list'>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>C++</li>
                    <li>Django</li>
                    <li>Javascript ES6+</li>
                    <li>React</li>
                    <li>Haskell</li>
                    <li>GameMaker</li>
                </ul>
                <p>When I'm not coding I like to read or play mobile games.</p>
            </div>
        </section>
    )
}
