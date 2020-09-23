import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'

const Layout = props => {
    return (
        <div>
            <Header/>
            <div className="screen">{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Layout