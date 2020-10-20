import React, {useState} from 'react'

//Routing
import Link from 'next/link'
import {useRouter} from 'next/router'

//Redux
import {connect} from 'react-redux'
import {setLanguageE, setLanguageS} from '../redux/actions/language'

const Header = props => {
    const router = useRouter()

    const [navToggle, setNavToggle] = useState(false)

    const toggle = () => {
        navToggle ? setNavToggle(false) : setNavToggle(true)
    }

    return (
        <div className="header">
            <div className="header-title-container">
                <a className="header-title" href="/">
                    SAFA
                </a>

                <div className="header-description desktop">
                    Somali American Farmers Association
                </div>
            </div>

            <div className="header-elements">
                <div className="lang-container">
                    <button 
                        onClick={() => props.setLanguageE()}
                        className="lang-btn"
                        style={{
                            backgroundColor: !props.language ? 'transparent' : '#20603D',
                            color: !props.language ? '#20603D' : 'white',
                        }}
                    >
                        EN
                    </button>
                    <div
                        style={{
                            height: '70%',
                            width: 2,
                            backgroundColor: '#20603D'
                        }}
                    />
                    <button
                        onClick={() => props.setLanguageS()}
                        className="lang-btn"
                        style={{
                            backgroundColor: props.language ? 'transparent' : '#20603D',
                            color: props.language ? '#20603D' : 'white',
                        }}
                    >
                        SO
                    </button>
                </div>
                <div className="link-container">
                    <Link href="/"> 
                        <div className="header-link" > Home </div>
                    </Link>

                    <Link href="/about">
                        <div className="header-link" >
                            About
                        </div>
                    </Link>

                    <Link href="/donate">
                        <div className="header-link" >
                            Donate
                        </div>
                    </Link>

                    <Link href="/news">
                        <div className="header-link" >
                            News
                        </div>
                    </Link>   

                    <Link href="/contact">
                        <div className="header-link" >
                            Contact
                        </div>
                    </Link>         
                </div>
            </div>

            <button 
                className="mobile-nav-container"
                onClick={() => toggle()}
            >
                <div className="mobile-nav">
                    <div 
                        className="nav-el"
                        style={{
                            transform: navToggle ?  'translate(10px, 0px)' : 'translate(0px, 0px)'
                        }}
                    />
                    <div className="nav-el"/>
                    <div 
                        className="nav-el"
                        style={{
                            transform: navToggle ?  'translate(-10px, 0px)' : 'translate(0px, 0px)'
                        }}
                    />
                </div>
            </button>

            <div 
                className="mobile-nav-links"
                style={{
                    pointerEvents: navToggle ? 'all' : 'none',
                    height: navToggle ? 'fit-content' : '0%'
                }}

            >
                <div 
                    className="mobile-nav-box"
                    style={{
                        display: navToggle ? 'flex' : 'none',
                    }}
                >
                    <div 
                        className="lang-container"
                    >
                        <button 
                            onClick={() => props.setLanguageE()}
                            className="lang-btn"
                            style={{
                                backgroundColor: !props.language ? 'transparent' : '#20603D',
                                color: !props.language ? '#20603D' : 'white',
                            }}
                        >
                            EN
                        </button>
                        <div
                            style={{
                                height: '70%',
                                width: 2,
                                backgroundColor: '#20603D'
                            }}
                        />
                        <button
                            onClick={() => props.setLanguageS()}
                            className="lang-btn"
                            style={{
                                backgroundColor: props.language ? 'transparent' : '#20603D',
                                color: props.language ? '#20603D' : 'white',
                            }}
                        >
                            SO
                        </button>
                    </div>
                </div>

                <div 
                    className="mobile-nav-box mobile-nav-link-box"
                    style={{
                        display: navToggle ? 'flex' : 'none',
                    }}
                >
                    <Link href="/"> 
                        <div 
                            className="header-link" 
                            onClick={() => toggle()}
                        > 
                            Home 
                        </div>
                    </Link>

                    <Link href="/about">
                        <div 
                            className="header-link" 
                            onClick={() => toggle()}
                        >
                            About
                        </div>
                    </Link>

                    <Link href="/donate">
                        <div 
                            className="header-link" 
                            onClick={() => toggle()}
                        >
                            Donate
                        </div>
                    </Link>

                    <Link href="/news">
                        <div 
                            className="header-link" 
                            onClick={() => toggle()}
                        >
                            News
                        </div>
                    </Link>   

                    <Link href="/contact">
                        <div 
                            className="header-link" 
                            onClick={() => toggle()}
                        >
                            Contact
                        </div>
                    </Link>  
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    language: state.language.language
})

export default connect(mapStateToProps, {
    setLanguageE,
    setLanguageS
})(Header)