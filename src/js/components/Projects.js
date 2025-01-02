import React from 'react'
import Card from './Card'
import Slider from 'react-slick';
import projects from '../data'


export default function Projects(){
    const settings = {
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    };

    const projectCards = projects.map(project => ( <Card key={project.title} {...project} />))    

    return (
        <section id='projects'>
            <div className='grid-container'>
                <h2 className='fs-600 text-pink-outlined text-center'>
                    monse/projects
                </h2>
                <p className='fs-400'>Here are some projects I have worked on both in and out of school.
                    I am particularly proud of <span className='fw-600'>TheaterTainment</span>.</p>
            </div>
            <div className='cards'>
                <Slider {...settings}>
                    {projectCards}
                </Slider>
            </div>
        </section>
    )
}
