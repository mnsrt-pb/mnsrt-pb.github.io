import React from 'react'

export default function About() {
    return (
        <section id='about' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>
                mia/about-me
            </h2>
            <div>
                <p>
                    I graduated from <span className='fw-600'>New York University</span> with 
                    a B.S. in Computer Science and a minor in Web Programming and Applications.
                </p>
                <p>
                    I have experience with:
                </p>
                <ul className='grid grid-list command-icon-list'>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>Pytest</li>
                    <li>Javascript ES6+</li>
                    <li>React</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>SQLAlchemy</li>
                    <li>Mongoose</li>
                    <li>Haskell</li>
                    <li>GameMaker</li>
                    <li>C++</li>
                    <li>Heroku</li>
                    <li>DigitalOcean</li>
                    <li>Git</li>
                    <li>GitHub Pages</li>
                    <li>PWA</li>
                    <li>Vite</li>
                    <li>Bootstrap</li>
                    <li>P5.js</li>
                </ul>
                <p>When I'm not coding I like to read, crochet, solve jigsaw puzzles, or play mobile games.</p>
            </div>
        </section>
    )
}
