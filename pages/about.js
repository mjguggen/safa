import React from 'react'

import AboutUs from '../components/aboutUs'



const About = props => {
    return (
        <div className="screen about">
            <div className="content">
                <div className="title">About Us</div>
                <div className="divider"/>
                <p>
                    About us description.
                </p>

                <AboutUs/>
            </div>
        </div>
    )
}

export default About