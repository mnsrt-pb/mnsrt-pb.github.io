import React from 'react'

export default function Experience() {
    return (
        <section id='experience' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>
                monse/experience
            </h2>
            <div>
                <h3 className='fs-500 fw-600'>
                    Web Developer
                </h3>
                <p className='text-dark-pink experience-info'>
                    <span>
                        Freelance, 
                        <span className='uppercase'> Feb 2024 - Present</span>
                    </span>
                    <span className='experience-website'><a href='https://dhcs-9edc1802518f.herokuapp.com/' aria-label="Visit Website">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                        </a>
                    </span>
                </p>
                <ul>
                    <li className='command-icon'>Developed and maintain a custom website for a cleaning company, ensuring functionality, user experience, accessibility, and responsiveness.</li>
                    <li className='command-icon'>Implemented design improvements and updates to enhance site performance and user engagement.</li>
                    <li className='command-icon'>Collaborated with customer to understand business requirements and translate them into effective web solutions.</li>
                    <li className='command-icon'>Utilized technologies such as Django and React to optimize site performance and usability.</li>
                </ul>
            </div>
        </section>
    )
}
