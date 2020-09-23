import React from 'react'
import {connect} from 'react-redux'

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const AboutUs = props => {
    return (
        <div className="about-wrap">
            <div className="about-container">
                <img src={img1} className="about-img"/>
                <div className="top box1">
                    <div className="sub-title">Our Mission</div>
                    <div className="img-overlay"/>
                </div>

                <div className="bottom box1">
                    <div className="img-overlay2"/>
                    <div className="img-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus a nisi porta sollicitudin at et nunc. Morbi in libero in turpis placerat sollicitudin vitae non orci. Sed accumsan aliquam elit at egestas. Sed lacus ex, pharetra in ligula at, pretium cursus nunc. Morbi sollicitudin justo vel dictum tempus. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-container box2">
                <img src={img2} className="about-img"/>

                <div className="top box2">
                    <div className="sub-title">Our Vision</div>
                    <div className="img-overlay"/>
                </div>

                <div className="bottom box2">
                    <div className="img-overlay2"/>
                    <div className="img-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus a nisi porta sollicitudin at et nunc. Morbi in libero in turpis placerat sollicitudin vitae non orci. Sed accumsan aliquam elit at egestas. Sed lacus ex, pharetra in ligula at, pretium cursus nunc. Morbi sollicitudin justo vel dictum tempus. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-container box3">
                <img src={img3} className="about-img"/>

                <div className="top box3">
                    <div className="sub-title">Our Values</div>
                    <div className="img-overlay"/>
                </div>
                <div className="bottom box3">
                    <div className="img-overlay2"/>
                    <div className="img-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus a nisi porta sollicitudin at et nunc. Morbi in libero in turpis placerat sollicitudin vitae non orci. Sed accumsan aliquam elit at egestas. Sed lacus ex, pharetra in ligula at, pretium cursus nunc. Morbi sollicitudin justo vel dictum tempus. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    language: state.language.language
})

export default connect(mapStateToProps, {

}) (AboutUs)