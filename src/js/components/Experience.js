import React from 'react'

export default function Experience() {
    return (
        <section id='experience' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>
                mia/experience
            </h2>
            <div>
                <h3 className='fs-500 fw-600 experience-info'>
                    <span>Custom Website for DHCS</span>
                    <span className='experience-website'><a href='https://danishomecleaningservices.com/' aria-label="Visit website">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                        </a>
                    </span>
                </h3>

                <p className='text-dark-pink'>
                    Freelance Web Developer & Product Manager <br/>
                    <span className='uppercase'> Jan 2024 - Present</span><br/><br/>
                </p>
                <ul className='command-icon-list'>
                    <li>Developed and maintain a custom website for Dani's Home Cleaning Services, ensuring functionality, user experience, accessibility, and responsiveness.</li>
                    <li>Collaborated directly with client to gather requirements and translate business needs into technical solutions,
                    ensuring <span className='fw-600'>100%</span> client satisfaction</li>
                    <li>Utilized technologies such as <span className='fw-600'>Django</span> and <span className='fw-600'>React</span> to optimize site performance, usability, and overall efficiency.</li>
                    <li>Established <span className='fw-600'>CI/CD pipeline</span>  using <span className='fw-600'>Heroku</span> with development, staging, and production environments, reducing
                    deployment time and minimizing downtime</li>
                    <li>Integrated <span className='fw-600'>MailerSend API</span> for automated email notifications to clients and business for quote/booking form
                    submissions</li>
                </ul>
            </div>
        </section>
    )
}
