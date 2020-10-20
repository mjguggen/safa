import React from 'react'

import fb from '../assets/logo-facebook.svg'


const Footer = props => {
    return (
        <div className="footer">
            <div className="left">
                <div className="title">
                    Stay Connected
                </div>
                <div className='logo-container'>
                    <a
                        href="https://www.facebook.com/SAFAMinnesota"
                        target="_blank"
                    >
                        <img 
                            src={fb} 
                            className="logo"
                        />
                    </a>

                </div>
            </div>

            <div className="right">
                <div >
                    &#169; Somali American Farmers Association
                </div>
                
            </div>
        </div>
    )
}

export default Footer